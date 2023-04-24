import styled from "styled-components";
import Paragraph from "./paragraph";

export default function Post({ author, authorImg, text, postImg }) {
    const formatedText = text.split("\n");
    return (
        <Main authorImg={authorImg} postImg={postImg}>
            <div className="Image Post-one" />
            <div className="Post-caption">
                <h2>titulos</h2>
                <div className="Author">
                    <div className="Author-img" />
                    <p>{author}</p>
                </div>
                <div className="Text">
                    <p>
                        {formatedText.map((item, index) => (
                            <Paragraph key={index} text={item} />
                        ))}
                    </p>
                </div>
            </div>
        </Main>
    );
}

const Main = styled.div`
    width: clamp(520px, 52vw, 52vw);
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
    }

    .Post-caption {
        padding: 4% 9% 3% 9%;
    }

    .Author {
        height: 7vh;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: 1rem;
    }

    .Author-img {
        height: 7.1vh;
        width: 7.1vh;
        clip-path: circle(50% at 50% 50%);
        background: url(${(props) => props.authorImg});
        background-size: 100% 100%;
    }

    .Text {
        margin-top: 4%;
        overflow-y: scroll;
        word-break: break-word;
        height: 35vh;

        &::-webkit-scrollbar {
            width: 5px;
        }

        & p {
            font-weight: 300;
            font-size: clamp(0.7em, 0.3em + 0.65vw, 2vw);
        }
    }
`;
