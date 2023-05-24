import styled from "styled-components";
import Posts from "./instagramPosts";

export default function InstagramSection() {
    const urls = [
        ["https://www.instagram.com/p/CWyJX2hLipj/", "https://www.instagram.com/p/CSAfrXxLNFh/"],
        ["https://www.instagram.com/p/CVljqO4ryVx/", "https://www.instagram.com/p/CR7V1Dkrluf/"],
        ["https://www.instagram.com/p/Cfm4tP6Ojt-/?hl=pt", "https://www.instagram.com/p/Cbvh0QrlVrw/"],
    ];

    return (
        <Instagram>
            <div id="Ig-text">
                <h1>Iniciativa Íris</h1>
                <p>
                Desenvolvendo a comunidade LGBTQIA+ brasileira e construindo um presente mais inclusivo. 
                O objetivo da organização é transformar o Brasil em um lugar mais amoroso e inclusivo para a comunidade queer. 
                Para esse fim, a Iniciativa Íris é um projeto social que oferece atendimento psicoterapeutico, 
                orientação profissional e treinamento de habilidades socioemocionais para pessoas LGBTQIA+ de forma gratuita.
                </p>
            </div>
            <div id="Ig-posts">
                <div>
                    {urls.map((url, index) => (
                        <Posts key={index} urlOne={url[0]} urlTwo={url[1]} index={index} />
                    ))}
                </div>
            </div>
            <div id="Divisor">
                <div className="Divisor"></div>
            </div>
        </Instagram>
    );
}

const Instagram = styled.div`
    position: relative;
    height: fit-content;
    padding-top: 6vh;
    padding-bottom: 10vh;
    display: grid;
    grid-template-columns: 59vw 40vw;
    grid-template-rows: 9fr 1fr;

    #Divisor {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        background: linear-gradient(to bottom, var(--soft-grey), var(--soft-grey) 50%, var(--black) 50%);
        align-items: center;

        .Divisor {
            width: 5rem;
            height: 5rem;
            background: linear-gradient(to bottom, var(--black), var(--black) 50%, var(--soft-grey) 50%);
            clip-path: circle(50% at 50% 50%);
            transition: 1s;
        }

        .Divisor:hover {
            transform: rotate(180deg) translateY(0.5px);
            transition: 1s;
        }
    }

    #Ig-text {
        height: 79vh;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        text-align: justify;
        padding: 3.4vw;

        h1 {
            font-size: clamp(1.5em, 1em + 4.7vw, 10vw);
            margin-top: 9.5%;
        }

        p {
            font-size: clamp(0.5em, 0.5em + 0.8vw, 5vw);
        }
    }

    #Ig-posts {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        div div {
            display: flex;
            width: 35vw;
            height: 14.65vw;
        }

        img {
            width: 100%;
            height: 100%;
        }

        a {
            position: absolute;
            height: 14.6vw;
            width: 17.5vw;
            transition: 1s;
        }

        a::after {
            display: block;
            text-align: center;
            color: var(--white);
            transition: 1s;
        }

        a:hover,
        a:focus-within {
            box-shadow: rgba(0, 0, 0, 0.6) 0px -190px 50px -60px inset;
            cursor: pointer;
            transition: 1s;
        }

        a:hover::after {
            position: absolute;
            bottom: 0;
            text-align: center;
            font-weight: 500;
            font-size: clamp(0.7em, 0.5em + 0.8vw, 5vw);
            transition: 3s;
        }

        .High-Edge > :first-child a:hover::after {
            content: "- Não binarios @iniciativaíris";
        }

        .High-Edge > :last-child a:hover::after {
            content: "- Young royals @iniciativaíris";
        }

        div :nth-child(2) > :first-child a:hover::after {
            content: "- Homofobia internalizada @iniciativaíris";
        }

        div :nth-child(2) > :last-child a:hover::after {
            content: "- Safo de Lesbos @iniciativaíris";
        }

        .Low-Edge > :first-child a:hover::after {
            content: "- Comunidade íris @iniciativaíris";
        }

        .Low-Edge > :last-child a:hover::after {
            content: "- Meu filho se assumiu @iniciativaíris";
        }

        div div div {
            transition: 1s;
        }

        div > div > div:hover {
            transform: translateY(-20px);
            transition: 1s;
        }

        .High-Edge > :first-child > :first-child,
        .High-Edge > :first-child > :last-child {
            border-radius: 10px 0 0 0;
        }

        .High-Edge > :last-child > :first-child,
        .High-Edge > :last-child > :last-child {
            border-radius: 0 10px 0 0;
        }

        .Low-Edge > :first-child > :first-child,
        .Low-Edge > :first-child > :last-child {
            border-radius: 0 0 0 10px;
        }

        .Low-Edge > :last-child > :first-child,
        .Low-Edge > :last-child > :last-child {
            border-radius: 0 0 10px 0;
        }
    }
`;
