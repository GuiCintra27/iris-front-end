import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../../assets/Backgrounds/home-bg.jpg";

export default function ParallaxBackground() {
    return (
        <Background>
            <div>
                <div id="Bg_filter"></div>
                <div className="Iniciative-container">
                    <div className="Bg_content Upper_bar"></div>
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
        display: flex;
        color: var(--soft-grey);
        font-size: 64px;
    }

    .Iniciative-container {
        margin: auto;
        position: relative;
    }

    .Bg_content {
        position: absolute;
        border-top: 5px solid var(--white);
        width: 562px;
    }

    .Bg_content.Down_bar {
        bottom: 0;
        transform: translate(-5%);
    }

    .Bg_content.Upper_bar {
        transform: translate(-30%);
    }

    #Subscribe {
        bottom: -6vh;
        right: 57px;
        position: absolute;
        color: var(--white);
        background: var(--black);
        height: clamp(68px, 8vw, 190px);
        width: clamp(273px, 30.5vw, 703px);
        display: flex;
        align-items: center;
        justify-content: center;

        & span {
            text-align: center;
            font-size: clamp(24px, .25em + 3vw, 96px);
            font-weight: 700;
        }

        &:hover {
            background: var(--blue);
            cursor: pointer;
            transition: 0.5s;
        }
    }
    
`;
