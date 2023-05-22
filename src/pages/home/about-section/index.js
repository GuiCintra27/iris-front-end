import styled from "styled-components";
import eyeCountour from "../../../assets/Icons/contour.png";
import eye from "../../../assets/Icons/eye.png";
import instagram from "../../../assets/Icons/instagram-icon.png";
import mentory from "../../../assets/Icons/mentory-icon.png";
import { useEffect, useRef } from "react";

export default function AboutSection() {
    const eyeRef = useRef();

    useEffect(() => {
        const handleMouseMove = function(e) {
            if (eyeRef.current) {
                const x = e.clientX;
                const y = e.clientY;
                eyeRef.current.style.left = x * 0.015 + 22.5 + "px";
                eyeRef.current.style.top = y * 0.0145 + 7 + "px";
            }
        };
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <About id="about-us-home-page">
            <div>
                <h1>Como a Iniciativa Íris trabalha?</h1>
            </div>

            <div id="Contour">
                <div id="Eye" ref={eyeRef}></div>
            </div>

            <div id="projectInformations">
                <div className="information-top">
                    <div className="Text">
                        <div>
                            <h1>INSTAGRAM</h1>
                            <div id="Instagram-icon"></div>
                        </div>

                        <p>
                            Semanalmente são lançadas três postagens sobre assuntos relevantes para o movimento
                            LGBTQIA+. Como o foco é ultrapassar barreiras e alcançar um público fora da bolha, os
                            conteúdos utilizam linguagem simples e engajante, passando por temas complexos como "O que
                            fazer quando seu filho se assumir", a questões que geram dúvidas em muitos como "Qual a
                            diferença entre Bi e Pan?" e chegando a assuntos aparentemente triviais, mas que geram
                            ótimas oportunidades de ampliar os espaços de discussão, como a participação da Linn da
                            Quebrada, uma travesti, no Big Brother Brasil, o maior reality show do país.
                        </p>
                    </div>

                    <div className="Text">
                        <div>
                            <h1>MENTORIA</h1>
                            <div id="Mentorship"></div>
                        </div>

                        <p>
                            Na mentoria, selecionamos uma comunidade de 30 jovens LGBTQIA+ para capacitá-los em três
                            pilares principais: Oportunidades, Habilidades Socioemocionais e Saúde Mental. <br />
                            No primeiro pilar capacitamos os jovens para alcançarem experiências educacionais
                            transformadoras através de encontros temáticos. <br />
                            No pilar de Socioemocionais estimulamos tudo que é essencial para que as emoções cotidianas
                            presentes em desafios e vivências sejam lidadas com equilíbrio. <br />
                            Já no pilar de saúde mental, conectamos os jovens com psicólogos voluntários para que os
                            participantes recebam o apoio e as ferramentas necessárias para enfrentarem as adversidades
                            de suas vidas.
                        </p>
                    </div>
                </div>
                <div className="information-bottom">
                    <div className="Text">
                        <div>
                            <h1>MENTORIA</h1>
                            <div id="Mentorship"></div>
                        </div>

                        <p>
                            Na mentoria, selecionamos uma comunidade de 30 jovens LGBTQIA+ para capacitá-los em três
                            pilares principais: Oportunidades, Habilidades Socioemocionais e Saúde Mental. <br />
                            No primeiro pilar capacitamos os jovens para alcançarem experiências educacionais
                            transformadoras através de encontros temáticos. <br />
                            No pilar de Socioemocionais estimulamos tudo que é essencial para que as emoções cotidianas
                            presentes em desafios e vivências sejam lidadas com equilíbrio. <br />
                            Já no pilar de saúde mental, conectamos os jovens com psicólogos voluntários para que os
                            participantes recebam o apoio e as ferramentas necessárias para enfrentarem as adversidades
                            de suas vidas.
                        </p>
                    </div>
                </div>
            </div>
        </About>
    );
}

const About = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 175px;
    background: linear-gradient(to bottom, var(--black), var(--black) 80%, var(--blue));
    padding-top: 14vh;
    text-align: center;
    justify-content: center;
    color: var(--white);

    && > div h1 {
        margin-bottom: 21vh;
        font-weight: 600;
    }

    #Contour {
        position: relative;
        margin: auto;
        height: 4.35vw;
        width: 7.1vw;
        background: url(${eyeCountour});
        background-size: 285% 245%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #Eye {
        position: absolute;
        background: url(${eye});
        background-size: 580% 330%;
        height: 2.9vw;
        width: 2.9vw;
    }

    & #projectInformations {
        margin-top: 28vh;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        padding: 0 100px 0 100px;

        .information-top {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 10vh;
            gap: 10%;
        }
        .information-bottom {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .Text {
        width: 50%;
        max-width: 606px;
        height: 50%;
        height: 591px;
        display: grid;
        grid-template-rows: 2fr 9fr;
        padding: 1rem;
        border-radius: 20px;
        background-color: var(--soft-grey);
        color: var(--black);
        font-weight: 500;
        transition: 0.35s;

        &:hover {
            background: var(--blue);
            color: var(--white);
            transition: 0.35s;
        }

        & > div {
            width: 100%;
            background: var(--white);
            border-radius: 20px;
            padding: 3.3%;
            padding-inline: 2vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        & h1 {
            margin-bottom: 0 !important;
            color: var(--black);
        }

        #Instagram-icon {
            border-radius: 5px;
            width: 4vw;
            scale: 0.9;
            max-width: 65px;
            min-width: 50px;
            aspect-ratio: 76 / 65;
            background: url(${instagram});
            background-size: 360% 240%;
        }

        #Mentorship {
            border-radius: 5px;
            width: 4vw;
            max-width: 65px;
            min-width: 50px;
            aspect-ratio: 76 / 65;
            background: url(${mentory});
            background-size: 190% 140%;
            transform: translateY(0.24vw);
        }

        & > p {
            margin-top: 7.5%;
            margin-inline: auto;
            width: 90%;
        }
    }
    @media screen {
        @media (max-width: 1280px) {
            .information-top {
                flex-direction: column;
                align-items: center;
                margin-bottom: 0 !important;
            }

            .Text {
                width: 606px;
                margin-bottom: 60px;
            }
        }
    }
`;
