import styled from "styled-components";
import eyeCountour from "../../../assets/Icons/contour.png";
import eye from "../../../assets/Icons/eye.png";
import instagram from "../../../assets/Icons/instagram-icon.png";
import mentory from "../../../assets/Icons/mentory-icon.png";
import consultancy from "../../../assets/Icons/consultancy-icon.png";
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
                            <h1>CONSULTORIA</h1>
                            <div id="Consultancy"></div>
                        </div>

                        <p>
                            Através de nossa consultoria buscamos trazer mais diversidade e inclusão para o mundo
                            corporativo e organizacional. Para isso, desenvolvemos planos de ação e planejamento
                            estratégico organizações que desejam ser mais inclusivas. Além disso, oferecemos palestras e
                            organizamos rodas de conversa sobre tópicos relacionados a diversidade e inclusão. Nosso
                            objetivo é criar um local de trabalho onde todos se sintam confortáveis independentemente da
                            orientação sexual ou identidade de gênero.
                        </p>
                    </div>

                    <div className="Text">
                        <div>
                            <h1>INSTAGRAM</h1>
                            <div id="Instagram-icon"></div>
                        </div>

                        <p>
                            Em nossa página, publicamos informações relevantes sobre tópicos constantemente subestimados
                            na comunidade LGBTQIA+, personalidades essenciais de nossa história, recomendações culturais
                            e muito mais. Usamos uma linguagem simples e acessível para atingir um público mais amplo,
                            divulgando informações para combater o preconceito
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
                            Durante o ciclo de mentoria, capacitamos jovens LGBTQIA+ entre 14 e 18 anos de idade por
                            meio de três pilares que desenvolvem competências essenciais para o século 21: Saúde Mental,
                            Habilidades Socioemocionais e Oportunidades. No pilar de Saúde Mental, conectamos os jovens
                            com psicólogos voluntários para que recebam o apoio e as ferramentas necessárias para
                            enfrentar as adversidades em suas vidas, inclusive traumas provenientes da LGBTfobia. Já em
                            Socioemocionais, ajudamos a desenvolver habilidades que são essenciais para lidar com a
                            experiência de ser queer. Instigamos um processo de autorreflexão para promover a
                            resiliência, o pensamento crítico e a tomada de decisões positivas. Por fim, em
                            Oportunidades, conectamos os jovens à experiências educacionais e profissionais
                            transformadoras.
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

        #Consultancy {
            width: 4vw;
            border-radius: 5px;
            aspect-ratio: 76 / 65;
            background: url(${consultancy});
            background-size: 140% 100%;
        }

        & > p {
            margin-top: 7.5%;
            margin-inline: auto;
            width: 90%;
        }
    }
`;
