import styled from "styled-components";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLikes } from "../../hooks/api/usePosts";

export default function Post({ author, authorImg, text, postImg, title, topicName, publishedAt, postId, status }) {
    const textToFormat = text.split("\n")[0].split(" ");
    const formatedText = [];
    const { likesAct, likes } = useLikes();

    useEffect(() => {
        likesAct(postId);
    }, [status]);

    for (let i = 0; i < textToFormat.length; i++) {
        if (i < 30 && textToFormat[i] !== "") {
            if (i === 29 || i === 28) {
                formatedText.push(textToFormat[i].replace(".", "").replace(",", ""));
            } else {
                formatedText.push(textToFormat[i]);
            };
        } else {
            break;
        }
    }

    return (
        <Main authorImg={authorImg} postImg={postImg}>
            <Link to={`/blog/post/${postId}`}>
                <div className="Image Post-one" />
            </Link>

            <div className="Post-caption">
                <div className="Post-titles">
                    <Link to={`/blog/post/${postId}`}>{title}</Link>
                    <div className="Author">
                        <div className="Author-img" />
                        <p>{author}</p>
                    </div>
                </div>

                <div className="Post-description">
                    <p># {topicName}</p>
                    <div> 
                        <BsHeartFill />
                        {likes?.length}
                    </div>
                </div>

                <div className="Text">
                    <p>
                        { formatedText.join(" ") + "..." }
                    </p>
                </div>

                <span className="Published-at">{publishedAt}</span>
            </div>
        </Main>
    );
}

const Main = styled.div`
    max-width: 998px;
    height: 30rem;
    background-color: var(--white);
    border-radius: 10px;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    margin-top: 5rem;
    margin-bottom: 1rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 2fr 8fr;
    overflow: hidden;

    .Image {
        height: 30rem;
        aspect-ratio: 1/1;
        border-radius: 10px 0 0 10px;
        background-size: 100% 100% !important;
        background: url(${(props) => props.postImg});
        cursor: pointer;
    }

    .Post-caption {
        padding: 4% 5% 3% 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .Post-titles {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Poppins';
        font-style: normal;
        color: #000000;

        a {
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
            color: #000000;

            &:hover {
                text-decoration: underline;
            }
        }

        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
    }

    .Post-description {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 14px;

        div {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        
        p {
            padding-right: 15px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
            color: #000000;
        }

        svg {
            color: red;
        }
    }

    .Author {
        height: 7vh;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .Author-img {
        height: 5.1vh;
        width: 5.1vh;
        clip-path: circle(50% at 50% 50%);
        background: url(${(props) => props.authorImg});
        background-size: 100% 100%;
    }

    .Text {
        height: 35vh;
        max-height: 100px;
        max-width: 445px;
        display: flex;

        &::-webkit-scrollbar {
            width: 5px;
        }


        & p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 300;
            line-height: 21px;
            display: flex;
            align-items: center;
            color: #000000;
            font-weight: 300;
            font-size: clamp(0.7em, 0.3em + 0.65vw, 14px);
        }
    }

    .Published-at {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 17.28px;
        line-height: 26px;
        display: flex;
        align-items: center;
        justify-content: end;
        color: #A9A9A9;
    }
`;
