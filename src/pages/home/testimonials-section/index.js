import styled from "styled-components";
import TestimonialCarousel from "../../../components/testimonial-carousel";
import ChatBaloons from "../../../assets/Icons/chat-ballons.svg";
import LuizaPng from "../../../assets/Fundadores/luiza.png";
import CauaPng from "../../../assets/Fundadores/caua.jpeg";
import FranciscoPng from "../../../assets/Fundadores/francisco.png";
import LumaPng from "../../../assets/Fundadores/luma.png";
import LuisPng from "../../../assets/Fundadores/luis.png";

export default function TestimonialSection(props) {
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
                            Veja o que <span>ex-mentorados</span> tem a dizer sobre <span>a íris</span>{" "}
                        </h1>
                    </div>
                    <div className="call-to-action">
                        <p>Seja parte da iniciativa e venha comemorar mais conquistas conosco!</p>
                    </div>
                    <div className="participants">
                        <div className="profile-ball">
                            <img src={LuisPng} alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src={LumaPng} alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src={FranciscoPng} alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src={CauaPng} alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src={LuizaPng} alt="profile-icon" />
                        </div>
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
    height: 865px;
    width: 100%;
    padding: 100px 6vw 100px 6vw;
    gap: 10%;
    .left-side-container {
        display: flex;
        width: 40%;
        flex-wrap: wrap;
        .introduction {
            display: flex;
            width: 100%;
            .chat-ballons {
                width: 30px;
                height: 30px;
            }
            p {
                margin-left: 10px;
                display: flex;
                align-items: center;
                height: 30px;
            }
        }
        .see-what-they-say-about-us {
            span {
                color: var(--pink);
            }
        }
        .call-to-action {
            font-weight: 600;
        }
        .participants {
            display: flex;
            img {
                margin-left: -20px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
        }
    }
    .right-side-container {
        width: 50%;
        min-width: 512px;
        max-width: 720px;
        display: flex;
        flex-direction: row-reverse;
        flex-grow: 1;
        position: relative;
        display: flex;
        overflow-x: hidden;
        .testimonial-carousel {
            width: 100%;
            position: relative;
            .carousel {
                height: 100%;
                .slider-wrapper {
                    cursor: pointer;
                    border-radius: 15px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    height: calc(100% - 12vw);
                    min-height: 425px ;
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
                    width: 60px;
                    height: 55px;
                    background-color: var(--pink);
                    top: calc(110% - 12vw);
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
            height: 1200px;
             align-items: center;
        }
        .left-side-container{
            flex-direction: column;
            align-items: center;
            width: 100%;

            .introduction{
                margin-bottom: 5vh;
            }

            .see-what-they-say-about-us{
                text-align: center;
            }
            
            .participants{
                margin-top: 5vh;
            }
        }
        .right-side-container{
            width: 100%;
            height: 200px;
            .slider-wrapper {
                    height: 0 !important;
                }
                .control-dots {
                    top: 78% !important;
                }
                button{
                    top: 90% !important;
                }
        }
    }
`;
