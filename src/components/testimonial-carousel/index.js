import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OpenQuotes from "../../assets/Icons/open-quotes.svg";
import CloseQuotes from "../../assets/Icons/close-quotes.svg";
import LumaPng from "../../assets/Fundadores/luma.png";
import NextArrow from "../../assets/Icons/next-arrow.svg";
import PreviousArrow from "../../assets/Icons/previous-arrow.svg";

const customPrevArrow = (onClickHandler, hasPrev, label) => (
    <ArrowStyle onClick={onClickHandler} title={label}>
        <img width={"30px"} height={"26px"} src={PreviousArrow} alt="previous-testimonial-arrow"></img>
    </ArrowStyle>
);

const customNextArrow = (onClickHandler, hasNext, label) => (
    <ArrowStyle onClick={onClickHandler} title={label}>
        <img width={"30px"} height={"26px"} src={NextArrow} alt="next-testimonial-arrow"></img>
    </ArrowStyle>
);

const customIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
        return (
            <IndicatorStyles
                style={{ background: "var(--pink)" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
            />
        );
    }
    return (
        <IndicatorStyles
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
        />
    );
};

export default function TestimonialCarousel() {
    const testimonialCards = [
        {
            profilePicturePath: LumaPng,
            name: "Luiza Guimarães",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper est vehicula mauris feugiat aliquam. Suspendisse vel tincidunt est. Duis fermentum, quam sed posuere condimentum, enim sem placerat libero, quis volutpat est ipsum eget mi. Donec nec neque tristique, pretium est quis, dignissim est. Aliquam at suscipit ex. Vestibulum non leo ante. Maecenas convallis ex sit amet imperdiet convallis. Suspendisse potenti. Praesent aliquet convallis laoreet. Fusce blandit viverra rutrum.",
        },
        {
            profilePicturePath: LumaPng,
            name: "Luiza Guimarães",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper est vehicula mauris feugiat aliquam. Suspendisse vel tincidunt est. Duis fermentum, quam sed posuere condimentum, enim sem placerat libero, quis volutpat est ipsum eget mi. Donec nec neque tristique, pretium est quis, dignissim est. Aliquam at suscipit ex. Vestibulum non leo ante. Maecenas convallis ex sit amet imperdiet convallis. Suspendisse potenti. Praesent aliquet convallis laoreet. Fusce blandit viverra rutrum.",
        },
        {
            profilePicturePath: LumaPng,
            name: "Luiza Guimarães",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper est vehicula mauris feugiat aliquam. Suspendisse vel tincidunt est. Duis fermentum, quam sed posuere condimentum, enim sem placerat libero, quis volutpat est ipsum eget mi. Donec nec neque tristique, pretium est quis, dignissim est. Aliquam at suscipit ex. Vestibulum non leo ante. Maecenas convallis ex sit amet imperdiet convallis. Suspendisse potenti. Praesent aliquet convallis laoreet. Fusce blandit viverra rutrum.",
        },
        {
            profilePicturePath: LumaPng,
            name: "Luiza Guimarães",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper est vehicula mauris feugiat aliquam. Suspendisse vel tincidunt est. Duis fermentum, quam sed posuere condimentum, enim sem placerat libero, quis volutpat est ipsum eget mi. Donec nec neque tristique, pretium est quis, dignissim est. Aliquam at suscipit ex. Vestibulum non leo ante. Maecenas convallis ex sit amet imperdiet convallis. Suspendisse potenti. Praesent aliquet convallis laoreet. Fusce blandit viverra rutrum.",
        },
        {
            profilePicturePath: LumaPng,
            name: "Luiza Guimarães",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper est vehicula mauris feugiat aliquam. Suspendisse vel tincidunt est. Duis fermentum, quam sed posuere condimentum, enim sem placerat libero, quis volutpat est ipsum eget mi. Donec nec neque tristique, pretium est quis, dignissim est. Aliquam at suscipit ex. Vestibulum non leo ante. Maecenas convallis ex sit amet imperdiet convallis. Suspendisse potenti. Praesent aliquet convallis laoreet. Fusce blandit viverra rutrum.",
        },
        {
            profilePicturePath: LumaPng,
            name: "Luiza Guimarães",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper est vehicula mauris feugiat aliquam. Suspendisse vel tincidunt est. Duis fermentum, quam sed posuere condimentum, enim sem placerat libero, quis volutpat est ipsum eget mi. Donec nec neque tristique, pretium est quis, dignissim est. Aliquam at suscipit ex. Vestibulum non leo ante. Maecenas convallis ex sit amet imperdiet convallis. Suspendisse potenti. Praesent aliquet convallis laoreet. Fusce blandit viverra rutrum.",
        },
    ];

    return (
        <Carousel
            className="testimonial-carousel"
            renderArrowPrev={customPrevArrow}
            renderArrowNext={customNextArrow}
            renderIndicator={customIndicator}
            statusFormatter={() => {}}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            showThumbs={false}
            swipeable={true}
            emulateTouch={true}
        >
            {testimonialCards.map((testimonialCard, ind) => (
                <CarouselElement key={testimonialCard + ind}>
                    <div className="testimonial-header">
                        <img
                            width={"30px"}
                            height={"30px"}
                            src={testimonialCard.profilePicturePath}
                            alt="profile-icon"
                        />
                        <p>{testimonialCard.name}</p>
                    </div>
                    <div className="testimonial-text">
                        <img
                            className="open-quotes"
                            src={OpenQuotes}
                            alt="chat quotes"
                        />
                        <p>{testimonialCard.testimonial}</p>
                        <img
                            className="close-quotes"
                            src={CloseQuotes}
                            alt="chat quotes"
                        />
                    </div>
                </CarouselElement>
            ))}
        </Carousel>
    );
}

const CarouselElement = styled.div`
    height: 100%;
    background-color: var(--shadow);
    color: white;

    .testimonial-header {
        display: flex;
        align-items: center;
        height: 124px;
        margin-left: 32px;
        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }
        p {
            font-family: 'Inter', sans-serif;
            font-size: 27px;
            margin-left: 25px;
        }
    }

    .testimonial-text {
        padding: 30px;
        display: flex;
        flex-direction: column;
        img{
            width: 24px;
        }
        p {
            margin-top: -10px;
            text-align: left;
            font-weight: 500;
            font-size: 20px;
            line-height: 31px;
            margin-inline: 32px;
        }
        img:last-child{
            margin-top: -10px;
            align-self: flex-end;
        }
    }
`;

const ArrowStyle = styled.button`
    position: absolute;
    z-index: 1;
    bottom: 0;
    cursor: pointer;
`;

const IndicatorStyles = styled.li`
    background: #d9d9d9;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin: 0 13px;
    border-radius: 50%;
`;
