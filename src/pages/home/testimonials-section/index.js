import styled from "styled-components";
import TestimonialCarousel from "../../../components/testimonial-carousel";
import ChatBaloons from "../../../assets/Icons/chat-ballons.svg";
import LuizaPng from "../../../assets/Fundadores/luiza.png";
import CauaPng from "../../../assets/Fundadores/caua.jpeg";
import FranciscoPng from "../../../assets/Fundadores/francisco.png";
import LumaPng from "../../../assets/Fundadores/luma.png";
import LuisPng from "../../../assets/Fundadores/luis.png";

export default function TestimonialSection(props) {
    const founders = [CauaPng, LumaPng, LuisPng, FranciscoPng, LuizaPng];
    return (
        <>
            <StyledTestimonialSection id="testimonial">
                <div className="left-side-container">
                    <div className="introduction">
                        <img className="chat-ballons" src={ChatBaloons} alt="chat ballons" />
                        <p>VEJA O QUE FALAM SOBRE NÓS</p>
                    </div>
                    <div className="see-what-they-say-about-us">
                        <h1>
                            Veja o que <span>voluntários</span> e <span>ex-estudantes</span> tem a dizer sobre a{" "}
                            <span>Íris</span>{" "}
                        </h1>
                    </div>
                    <div className="call-to-action">
                        <p>Seja parte da iniciativa e venha construir um presente mais amoroso!</p>
                    </div>
                    <div className="participants">
                        {founders.map((item, key) => (
                            <div className="profile-ball" key={key}>
                                {key === 0 ? (
                                    <img src={item} className="caua-exposure" alt="profile-icon" />
                                ) : key === 4 ? (
                                    <img src={item} className="luisa-exposure" alt="profile-icon" />
                                ) : (
                                    <img src={item} alt="profile-icon" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-side-container">
                    <TestimonialCarousel />
                </div>
            </StyledTestimonialSection>
        </>
    );
}

const StyledTestimonialSection = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding: 80px 5vw 60px 9.5vw;
    gap: 7.5%;

    .left-side-container {
        display: flex;
        flex-direction: column;
        width: 40%;

        .introduction {
            display: flex;
            height: fit-content;
            margin-top: 20px;
            width: 100%;
            .chat-ballons {
                width: 24px;
                height: 24px;
            }
            p {
                margin-left: 10px;
                display: flex;
                align-items: center;
                letter-spacing: 2.5px;
                font-size: 20px;
            }
        }

        .see-what-they-say-about-us {
            margin-top: 10%;
            width: 90%;
            height: fit-content;
            font-family: "Lato", sans-serif;
            letter-spacing: 1.45px;
            line-height: 56px;
            font-size: 22px;
            span {
                color: var(--pink);
            }
        }

        .call-to-action {
            width: 80%;
            margin-top: 8%;
            line-height: 40px;
            font-family: "Lato", sans-serif;
            font-weight: 700;
            font-size: 22px;
        }

        .participants {
            display: flex;
            margin-top: 10%;
            .caua-exposure {
                filter: brightness(1.8);
                margin-left: 0;
            }
            .luisa-exposure {
                filter: brightness(1.1);
            }
            img {
                filter: brightness(1);
                margin-left: -20px;
                width: 97px;
                height: 97px;
                border-radius: 100%;
            }
        }
    }

    .right-side-container {
        margin-top: 12px;
        width: 824px;
        position: relative;

        .testimonial-carousel {
            width: 100%;
            .carousel {
                height: 740px;
                .slider-wrapper {
                    width: 800px;
                    height: 505px;
                    background-color: red;
                    cursor: pointer;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    border: 3px solid var(--white);
                    border-radius: 18px;
                    ul {
                        height: 100%;
                    }
                }
                .control-dots {
                    top: calc(100% - 12vw);
                    li {
                        cursor: pointer;
                    }
                }

                button {
                    width: 74px;
                    height: 69px;
                    background-color: var(--pink);
                    top: calc(110% - 10.5vw);
                    box-sizing: content-box;
                    border: 2px solid var(--white);

                    &[title="next slide / item"] {
                        border-radius: 0 10px 10px 0;
                        left: calc(50%);
                    }

                    &[title="previous slide / item"] {
                        border-radius: 10px 0 0 10px;
                        right: calc(50%);
                    }
                }
            }
        }
    }

    @media (min-width: 2000px) {
        .control-dots {
            top: 425px !important;
        }
        button {
            top: 491px !important;
        }
    }

    @media (max-width: 1280px) {
        & {
            flex-direction: column;
            align-items: center;
            height: 100%;
        }
        .left-side-container {
            flex-direction: column;
            align-items: center;
            width: 100%;

            p {
                text-align: center;
            }

            .introduction {
                margin-bottom: 5vh;
            }

            .see-what-they-say-about-us {
                text-align: center;
            }

            .participants {
                margin-top: 5vh;
            }
        }
        .right-side-container {
            width: 100%;
            height: 200px;

            .testimonial-carousel {
                width: 100%;
                .carousel {
                    height: 740px;
                    .slider-wrapper {
                        width: 700px !important;
                        height: auto;
                        background-color: red;
                        cursor: pointer;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border: 3px solid var(--white);
                        border-radius: 18px;
                        ul {
                            height: 100%;
                        }
                    }
                }
                .control-dots {
                    top: 78% !important;
                    display: none;
                }
                button {
                    top: 90% !important;
                    display: none;
                }
            }
        }
    }
`;
