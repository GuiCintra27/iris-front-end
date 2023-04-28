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
    padding: 8% 10% 8% 10%;
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
        flex-grow: 1;
        position: relative;
        display: flex;
        overflow-x: hidden;
        .testimonial-carousel {
            width: 100%;
            .carousel {
                height: 100%;
                .slider-wrapper {
                    border-radius: 15px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
                .control-dots {
                    position: absolute;
                    bottom: 15%;
                }
                button[title="next slide / item"] {
                    width: 60px;
                    height: 55px;
                    background-color: var(--pink);
                    border-radius: 0 10px 10px 0;
                    bottom: 0;
                    left: calc(50%);
                    box-sizing: content-box;
                    border: 2px solid var(--white);
                }
                button[title="previous slide / item"] {
                    width: 60px;
                    height: 55px;
                    background-color: var(--pink);
                    border-radius: 10px 0 0 10px;
                    bottom: 0;
                    right: calc(50%);
                    box-sizing: content-box;
                    border: 2px solid var(--white);
                }
            }
        }
    }
`;
