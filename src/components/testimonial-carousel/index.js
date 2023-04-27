import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const customPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow prev-arrow">
        <i className="fa fa-angle-left"></i>
    </button>
);

const customNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow next-arrow">
        <i className="fa fa-angle-right"></i>
    </button>
);

const customIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
        return (
            <li
                style={{ backgroundColor: "white", borderRadius: "50%", width: "12px", height: "12px" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
            />
        );
    }
    return (
        <li
            style={{ backgroundColor: "#8c8c8c", borderRadius: "50%", width: "8px", height: "8px" }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex="0"
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
        />
    );
};

export default function MyCarousel() {
    return (
        <CarouselContainer id="carousel-container">
            <Carousel
                className="testimonial-carousel"
                // renderArrowPrev={customPrevArrow}
                // renderArrowNext={customNextArrow}
                // renderIndicator={customIndicator}
                // showThumbs={false}
            >
                <CarouselElement className="test">
                    <p>1eweff</p>
                </CarouselElement>
                <CarouselElement className="test">
                    <p>2fdsaf</p>
                </CarouselElement>
                <CarouselElement className="test">
                    <p>3afdsa</p>
                </CarouselElement>
                <CarouselElement className="test">
                    <p>4afdsa</p>
                </CarouselElement>
                <CarouselElement className="test">
                    <p>5fdsafds</p>
                </CarouselElement>
            </Carousel>
        </CarouselContainer>
    );
}

const CarouselElement = styled.div`
    width: 100px;
    height: 100px;
    background-color: blue;
`;

const CarouselContainer = styled.div`
    .testimonial-carousel {
        width: 100%;
    }
`;
