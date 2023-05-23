import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useCreatePostComment, useDeletePostComment, useLikes, usePostComments, usePosts, useRecentlyVisited } from "../../hooks/api/usePosts";
import whiteArrow from "../../assets/Icons/white-arrow.png";
import dayjs from "dayjs";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import useToken from "../../hooks/useToken";
import useUserId from "../../hooks/useUserId";
import { Tooltip, tooltipClasses } from "@mui/material";
import commentIcon from "../../assets/Icons/comment-icon.png";
import sendIcon from "../../assets/Icons/send-icon.png";
import smileIcon from "../../assets/Icons/smile-icon.png";
import { CommentItem } from "./commentItem";
import UserContext from "../../contexts/UserContext";
import { useValue } from "../../hooks/useValue";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import PostSuggestions from "../../components/blog/postSuggestions";

const FilterTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
    ({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            color: "white",
            fontSize: 13,
        },
    }),
);

export default function PostPage() {
    const userId = useUserId();
    const { postId } = useParams();
    const [status, setStatus] = useState(true);
    const [likeStatus, setLikeStatus] = useState(false);
    const { postAct, post } = usePosts();
    const { likesAct, likes } = useLikes();
    const formatedText = post?.text.split("\n");
    const { recentlyVisitedAct } = useRecentlyVisited();
    const tokenRef = useRef(useToken());
    const configRef = useRef({
        headers: { Authorization: `Bearer ${tokenRef.current}` },
    });
    const isLiked = likes?.filter((l) => l.userId === userId);
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const { postComments, getPostComments } = usePostComments();
    const { createPostComment, createCommentsLoading } = useCreatePostComment();
    const { deletePostComment, deleteCommentsLoading } = useDeletePostComment();
    const [commentText, updateCommentText, setCommentText] = useValue();
    const [displayEmojis, setDisplayEmojis] = useState(false);
    const [commentSort, setCommentSort] = useState("desc");
    const commentRef = useRef();
    const sortComments = (arr) => commentSort === "asc" ? arr.toReversed() : arr;

    useEffect(() => {
        if (!createCommentsLoading || !deleteCommentsLoading) {
            getPostComments(postId);
        }
    }, [createCommentsLoading, deleteCommentsLoading, postId]);

    //eslint-disable-next-line
    useEffect(async () => {
        try {
            if (tokenRef.current) {
                await recentlyVisitedAct(postId, configRef.current);
            }
        } catch (err) {}
    }, [postId]);

    useEffect(() => {
        postAct(postId);
        likesAct(postId);
    }, [status, postId]);

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

            <MidContent>
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

                <PostContainer>
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
                                <h2 onClick={() => { navigate(`/blog?filter=${post?.topics?.id}`); }}># <span> {post?.topics?.name}</span></h2>
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

                    <PostContent> 
                        <PostText>
                            {formatedText?.map((item, index) => (
                                <span key={index}>
                                    {item}
                                    <br />
                                </span>
                            ))}

                        </PostText>

                        <PostSuggestions postId={postId} topicId={post?.topics?.id} topicName={post?.topics?.name}/>
                    </PostContent>
                </PostContainer>

                <PostCommentStyle>
                    <header className="comment-header">
                        <img src={commentIcon} alt="Message Icon" />
                        <h3>Comentários</h3>
                    </header>

                    <div className="comment-container">
                        { userData?.user && <label htmlFor="comment-box">{userData.user.name}#{userData.user.id}</label> }
                        <div className="box-container">
                            <textarea 
                                name="comment-box" id="comment-box" rows="1" placeholder="Faça seu comentário..."
                                ref={commentRef}
                                value={commentText}
                                onChange={updateCommentText}
                                onInput={(e) => {
                                    const textarea = e.target;
                                    textarea.style.height = "";
                                    textarea.style.height = Math.min(textarea.scrollHeight+2, 300) + "px";
                                }}
                                onClick={() => setDisplayEmojis(false)}
                            />
                            <div className="options">
                                <img src={smileIcon} alt="Emojis" onClick={() => setDisplayEmojis(!displayEmojis)}/>
                                <img src={sendIcon} alt="Send" onClick={() => {
                                    createPostComment(postId, commentText);
                                    setCommentText("");
                                    commentRef.current.style.height = "55px";
                                    setDisplayEmojis(false);
                                }}/>
                            </div>
                            {displayEmojis && 
                                <EmojiPicker
                                    autoFocusSearch={false}
                                    previewConfig={{ showPreview: false }}
                                    searchDisabled
                                    height="350px"
                                    emojiStyle={EmojiStyle.NATIVE}
                                    onEmojiClick={emojiData => {
                                        setCommentText(t => t + emojiData.emoji);
                                    }}
                                />
                            }
                        </div>

                        <div className="sort">
                            <p 
                                className={commentSort === "desc" && "selected"}
                                onClick={() => setCommentSort("desc")}
                            >
                                Mais Recentes
                            </p>
                            <p 
                                className={commentSort === "asc" && "selected"}
                                onClick={() => setCommentSort("asc")}
                            >
                                Mais Antigos
                            </p>
                        </div>
                    </div>

                    <div className="comments">
                        {postComments && sortComments(postComments).map((c) => 
                            <CommentItem key={c.id} data={c} username={userData?.user?.name} deletePostComment={deletePostComment}/>
                        )}
                    </div>

                </PostCommentStyle>
            </MidContent>
            
            <Footer />
        </Container>
    );
}

// Styled Components
const Container = styled.div``;

const MidContent = styled.div`
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

const PostContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`;

const PostInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin-right: 18%;

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
            width: fit-content;

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
    width: 800px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    align-items: center;
    text-align: justify;
    color: #000000;
`;

const PostContent = styled.div`
    display: flex;
    width: auto;
    gap: 60px;
    padding-left: 20%;
`;

const PostCommentStyle = styled(PostText)`
    align-items: baseline;
    margin: 0 auto;

    img {
        font-size: 12px;
        width: fit-content;
        height: fit-content;
    }

    .comment-header {
        width: 100%;
        display: flex;
        align-items: flex-start;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid #D9D9D9;
        margin-bottom: 25px;

        h3 {
            font-weight: 600;
            font-size: 30px;
            line-height: 40px;
        }
    }

    .comment-container {
        display: flex;
        flex-direction: column;
        width: 100%;

        label {
            font-weight: 500;
            font-size: 22px;
            margin: 6px;
        }

        textarea {
            font-size: 18px;
            padding: 13px;
            padding-right: 90px;
            border: 1px solid #D9D9D9;
            border-radius: 10px;
            width: 100%;
            resize: none;
            margin-bottom: 10px;

            ::placeholder {
                color: #A8A8A8;
            }
        }

        .box-container {
            position: relative;
            padding-left: 40px;

            .options {
                position: absolute;
                display: flex;
                gap: 2rem;
                top: 17px;
                right: 24px;

                * {
                    cursor: pointer;
                    :hover {
                        filter: invert(40%) sepia(11%) saturate(0%) hue-rotate(251deg) brightness(91%) contrast(78%);
                    }
                }
            }

            .epr-main {
                position: absolute;
                right: 0;
                top: -358px;
                border: 1px solid #D9D9D9;
                border-radius: 10px;

                .epr-body {
                    margin-bottom: 16px;
                }
            }
        }

        .sort {
            font-weight: 500;
            font-size: 18px;
            align-self: flex-end;
            display: flex;
            gap: 16px;
            margin-bottom: 16px;

            .selected {
                color: black;
                :after { width: 100%; }
            }

            p {
                cursor: pointer;
                position: relative;
                text-decoration: none;
                color: #a0a0a0;
                font-size: 18px;
                letter-spacing: 0.5px;
                padding: 0 10px;

                :after{
                    content: "";
                    position: absolute;
                    background-color: #ff3c78;
                    height: 3px;
                    width: 0;
                    left: 0;
                    bottom: -4px;
                    transition: 0.3s;
                }

                :hover{
                    color: black;
                }

                :hover:after{
                    width: 100%;
                }
            }
        }

    }

    .comments {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
`;
