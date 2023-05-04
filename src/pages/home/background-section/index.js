import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../../assets/Backgrounds/home-bg.jpg";

export default function ParallaxBackground() {
    return (
        <Background>
            <div>
                <div id="Bg_filter"></div>

                <div className="Bg_content"></div>
                <span id="Img_frase">Tome uma <br /> iniciativa!</span>
                <div className="Bg_content Down_bar"></div>

                <Link to="/volunteers" id="Subscribe"><span>Faça Parte!</span></Link>
            </div>
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    align-items: center;
    background: url(${backgroundImage});
    background-size: 100% 150%;
    

    & > div{
        display: flex;
        justify-content: center;
    }

    #Bg_filter{
        top: 0;
        left: 0;
        margin-top: 13vh;
        height: 84vh;
        width: 100%;
        position: absolute;
        background-color: var(--black);
        opacity: 0.2;
    }

    #Img_frase{
        width: 28vw;
        font-size: clamp(2em, 1.6em + 2vw, 10vw);
        display: flex;
        color: var(--soft-grey);
        transform: translate(8.3vw);
    }

    .Bg_content{
        position: absolute;
        border-top: 5px solid var(--white);
        width: 29.3vw;
    }

    .Bg_content.Down_bar{
        margin-left: 13vw;
        transform: translateY(9.5vw);

    }

    #Subscribe{
        position: absolute;
        color: var(--white);
        background: var(--black);
        height: 11vh;
        width: 22.8vw;
        transform: translate(34.2vw, 46vh);
        display: flex;
        align-items: center;
        justify-content: center;

        & span{
            text-align: center;
            height: 8vh;
            font-size: clamp(1em, .6em + 2vw, 4vw);
            font-weight: 700;
        }
    
        &:hover{
            background: var(--blue);
            cursor: pointer;
            transition: .5s;
        }
    }
`;
