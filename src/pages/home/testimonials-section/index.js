import styled from "styled-components";
import TestimonialCarousel from "../../../components/testimonial-carousel";

export default function TestimonialSection(props) {
    return (
        <>
            <StyledTestimonialSection id="testimonial">
                <div className="left-side-container">
                    <div className="introduction">
                        <div className="header">
                            <img src="" alt="chat ballons" />
                            <p>VEJA O QUE FALAM SOBRE NÓS</p>
                        </div>
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
                            <img src="" alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src="" alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src="" alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src="" alt="profile-icon" />
                        </div>
                        <div className="profile-ball">
                            <img src="" alt="profile-icon" />
                        </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <div className="carousel">
                        <TestimonialCarousel />
                    </div>
                </div>
            </StyledTestimonialSection>
        </>
    );
}

const StyledTestimonialSection = styled.div`
    display: flex;
    height: 865px;
    width: 100%;
    .left-side-container {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        .introduction {
            width: 100%;
        }
    }
    .right-side-container {
        width: 50%;
        position: relative;
        display: flex;
        overflow-x: hidden;
        .carousel {
            width: 100%;
        }
    }
`;
