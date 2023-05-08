import styled from "styled-components";
import Posts from "./instagramPosts";

export default function InstagramSection() {
    const urls = [
        ["https://www.instagram.com/p/CYuypS-L0hb/", "https://www.instagram.com/p/CY-DNxprNTt/"],
        ["https://www.instagram.com/p/CXj1uHOLSnc/", "https://www.instagram.com/p/CX1Gl8erNre/"],
        ["https://www.instagram.com/p/CZUagLDro3D/", "https://www.instagram.com/p/CXeDJehLK3i/"],
    ];

    return (
        <Instagram>
            <div id="Ig-text">
                <h1>Iniciativa Íris</h1>
                <p>
                    Empoderando a juventude LGBTQIA+ brasileira e lutando por um presente mais inclusivo, visamos
                    impactar o maior número de pessoas possíveis disseminando conhecimento sobre a causa LGBTQIA+ para o
                    público geral e oferecendo capacitação social e acadêmica, além de auxílio psicológico gratuito,
                    para jovens LGBTQIA+.
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
        height: 90vh;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        text-align: justify;
        padding: 3.4vw;

        h1 {
            font-size: clamp(1.5em, 1em + 4.7vw, 10vw);
            margin-top: 15%;
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
            content: "Lin da Quebrada    @iniciativaíris";
        }

        .High-Edge > :last-child a:hover::after {
            content: "Travesti Terminologia @iniciativaíris";
        }

        div :nth-child(2) > :first-child a:hover::after {
            content: "Tributo aos Artistas    @iniciativaíris";
        }

        div :nth-child(2) > :last-child a:hover::after {
            content: "Feliz Ano Novo Íris   @iniciativaíris";
        }

        .Low-Edge > :first-child a:hover::after {
            content: "Visibilidade Trans    @iniciativaíris";
        }

        .Low-Edge > :last-child a:hover::after {
            content: "Combate a Sorofobia   @iniciativaíris";
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
