import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../../assets/Backgrounds/home-bg.jpg";

export default function ParallaxBackground() {
    return (
        <Background>
            <div>
                <div id="Bg_filter"></div>
                <div className="Iniciative-container">
                    <div className="Bg_content"></div>
                    <span id="Img_frase">
                        Tome uma <br /> iniciativa!
                    </span>
                    <div className="Bg_content Down_bar"></div>
                </div>

                <Link to="/volunteers" id="Subscribe">
                    <span>Faça Parte!</span>
                </Link>
            </div>
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background: url(${backgroundImage});
    background-size: cover;

    & > div {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    #Bg_filter {
        top: 0;
        left: 0;
        height: 84vh;
        width: 100%;
        position: absolute;
        background-color: var(--black);
        opacity: 0.2;
    }

    #Img_frase {
        width: 28vw;
        font-size: clamp(2em, 1.6em + 2vw, 10vw);
        display: flex;
        color: var(--soft-grey);
        transform: translate(8.3vw);
    }

    .Iniciative-container {
        margin: auto;
    }

    .Bg_content {
        position: absolute;
        border-top: 5px solid var(--white);
        width: 29.3vw;
    }

    .Bg_content.Down_bar {
        border-top: 5px solid var(--white);
        margin-left: 13vw;
        width: 29.3vw;
    }

    #Subscribe {
        bottom: -5vh;
        right: 40px;
        position: absolute;
        color: var(--white);
        background: var(--black);
        height: 8vh;
        width: 22.8vw;
        display: flex;
        align-items: center;
        justify-content: center;

        & span {
            text-align: center;
            font-size: clamp(1em, 0.6em + 2vw, 4vw);
            font-weight: 700;
        }

        &:hover {
            background: var(--blue);
            cursor: pointer;
            transition: 0.5s;
        }
    }
`;
