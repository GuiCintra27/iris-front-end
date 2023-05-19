import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useLikes, usePosts } from "../../hooks/api/usePosts";
import whiteArrow from "../../assets/Icons/white-arrow.png";
import dayjs from "dayjs";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import useToken from "../../hooks/useToken";
import useUserId from "../../hooks/useUserId";
import { Tooltip, tooltipClasses } from "@mui/material";

export default function PostPage() {
    const userId = useUserId();
    const { postId } = useParams();
    const [status, setStatus] = useState(true);
    const [likeStatus, setLikeStatus] = useState(false);
    const { postAct, post } = usePosts();
    const { likesAct, likes } = useLikes();
    const formatedText = post?.text.split("\n");
    const tokenRef = useRef(useToken());
    const configRef = useRef({
        headers: { Authorization: `Bearer ${tokenRef.current}` },
    });
    const isLiked = likes?.filter((l) => l.userId === userId);
    const navigate = useNavigate();

    useEffect(() => {
        postAct(postId);
        likesAct(postId);
    }, [status]);

    const FilterTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                color: "white",
                fontSize: 13,
            },
        }),
    );

    async function setLikeOrDislike() {
        try {
            if (isLiked?.length === 0) {
                await axios.post(`${process.env.REACT_APP_BACK_END_URL}/posts/likes`, { postId }, configRef.current);
            } else {
                await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/posts/likes/${postId}`, configRef.current);
            }

            setStatus([]);
        } catch (error) {
            navigate("/sign-in");

            Swal.fire({
                icon: "error",
                title: "Você precisa estar logado!",
                text: "Como vamos saber quem deixou o like? :)",
            });
        }
    }

    function likeAnimation() {
        setLikeStatus(true);

        setTimeout(() => {
            setLikeStatus(false);
        }, 1000);
    }

    return (
        <Container>
            <Header />

            <PostContainer>
                <CoverDiv postCover={post?.postCover}>
                    <img
                        onClick={() => {
                            // eslint-disable-next-line no-restricted-globals
                            history.back();
                        }}
                        src={whiteArrow}
                        alt={"seta branca para voltar de página"}
                    />
                    <h1>{post?.title.toUpperCase()}</h1>
                </CoverDiv>

                <PostContent>
                    <PostInfos isLiked={isLiked?.length} likeStatus={likeStatus}>
                        <div className="authorDiv">
                            <img src={post?.admins?.photo} alt={"imagem do perfil do autor do post"} />

                            <div className="author">
                                <h2>Escrito por {post?.admins?.name}</h2>
                                <span>{dayjs(post?.created_at).format("DD/MM/YYYY")}</span>
                            </div>
                        </div>

                        <div className="topicAndLikesDiv">
                            <FilterTooltip title={"Ir para a página do tópico"} arrow>
                                <h2
                                    onClick={() => {
                                        navigate(`/blog?filter=${post?.topics?.id}`);
                                    }}
                                >
                                    # <span> {post?.topics?.name}</span>
                                </h2>
                            </FilterTooltip>

                            <div className="heartDiv">
                                {isLiked?.length === 0 ? (
                                    <BsHeart
                                        onClick={() => {
                                            likeAnimation();
                                            setLikeOrDislike();
                                        }}
                                    />
                                ) : (
                                    <BsHeartFill
                                        onClick={() => {
                                            setLikeOrDislike();
                                        }}
                                    />
                                )}

                                <div className="heart" />

                                <span>{likes?.length}</span>
                            </div>
                        </div>
                    </PostInfos>

                    <PostText>
                        {formatedText?.map((item, index) => (
                            <span key={index}>
                                {item}
                                <br />
                            </span>
                        ))}
                    </PostText>
                </PostContent>
            </PostContainer>

            <Footer />
        </Container>
    );
}

//Styled Components
const Container = styled.div``;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-bottom: 100px;
`;

const CoverDiv = styled.div`
    background-size: 100% 100% !important;
    background: url(${(props) => props.postCover});
    box-shadow: inset 0px -100px 100px rgba(0, 0, 0, 0.25);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 530px;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 40px;
    display: flex;
    justify-content: start;
    align-items: end;
    gap: 15px;

    img {
        height: 50px;
        width: 50px;
        transform: rotate(180deg);
        cursor: pointer;
        transition: 0.5s ease-in;

        &:hover {
            height: 55px;
            width: 55px;
        }
    }

    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        height: 50px;
        display: flex;
        align-items: center;
        color: #ffffff;
        opacity: 0.9;
    }
`;

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const PostInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40%;
    margin-left: 10.95%;
    width: 60%;

    img {
        width: 60px;
        height: 60px;
        border-radius: 100px;
    }

    .heart {
        display: ${(props) => (props.likeStatus ? "initial" : "none")};
        position: absolute;
        width: 17px;
        height: 17px;
        left: 5px;
        bottom: 0 auto;
        background-color: red;
        transform: rotate(-45deg);
        animation: heart 0.6s linear infinite;
        cursor: pointer;
    }

    @keyframes heart {
        0% {
            transform: rotate(-45deg) scale(1.07);
        }

        80% {
            transform: rotate(-45deg) scale(1);
        }

        100% {
            transform: rotate(-45deg) scale(0.8);
        }
    }

    .heart:before {
        content: "";
        position: absolute;
        background-color: red;
        width: 17px;
        height: 17px;
        right: -50%;
        border-radius: 50px;
    }

    .heart:after {
        content: "";
        position: absolute;
        background-color: red;
        width: 17px;
        height: 17px;
        top: -50%;
        border-radius: 50px;
    }

    .heartDiv {
        display: flex;
        align-items: center;
        position: relative;
        gap: 8px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 26.4253px;
        line-height: 40px;
        display: flex;
        align-items: center;
        color: #000000;

        svg {
            cursor: pointer;
            color: ${(props) => (props.isLiked ? "red" : "#374957")};
            animation: heart;
        }
    }

    .topicAndLikesDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        h2 {
            display: flex;
            gap: 5px;
            font-family: "Poppins";
            font-style: normal;
            font-weight: 700;
            font-size: 24.3252px;
            line-height: 36px;
            display: flex;
            align-items: center;
            color: #000000;

            &:hover {
                cursor: pointer;
            }
        }

        span {
            font-weight: 500;
        }
    }

    .authorDiv {
        display: flex;
        gap: 15px;
    }

    .author {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;

        h2 {
            font-size: 22px;
            line-height: 33px;
            display: flex;
            align-items: center;
            color: #000000;
        }

        span {
            font-size: 17px;
            line-height: 26px;
            display: flex;
            align-items: center;
            color: #a9a9a9;
        }
    }
`;

const PostText = styled.div`
    display: flex;
    flex-direction: column;
    width: 41.9%;
    margin: 0 auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: justify;
    color: #000000;
`;
