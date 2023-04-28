import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OpenQuotes from "../../assets/Icons/open-quotes.svg";
import CloseQuotes from "../../assets/Icons/close-quotes.svg";
import LuizaPng from "../../assets/Fundadores/luiza.png";

const customPrevArrow = (onClickHandler, hasPrev, label) => (
    <ArrowStyle onClick={onClickHandler} title={label} style={{ left: 15 }}>
        -
    </ArrowStyle>
);

const customNextArrow = (onClickHandler, hasNext, label) => (
    <ArrowStyle onClick={onClickHandler} title={label} style={{ right: 15 }}>
        +
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
            profilePicturePath: LuizaPng,
            name: "Luiza Guimarães",
            testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugit? Quas blanditiis libero cumque atque officiis suscipit provident rerum molestiae aut quod. Optio suscipit rerum autem corporis totam a aperiam?
                Dolore amet ipsa deleniti veniam? Ut porro libero nisi obcaecati exercitationem? Quis numquam unde maiores aperiam soluta excepturi hic voluptatem quibusdam blanditiis maxime architecto mollitia, temporibus placeat error? Accusantium, id!
                Delectus vero eius quis velit, unde libero exercitationem fugit sequi vel ullam quas mollitia minus? Id hic consequuntur, dolor aliquam sit quae et, error maxime eos quidem non exercitationem atque.`,
        },
        {
            profilePicturePath: LuizaPng,
            name: "Luiza Guimarães",
            testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugit? Quas blanditiis libero cumque atque officiis suscipit provident rerum molestiae aut quod. Optio suscipit rerum autem corporis totam a aperiam?
                Dolore amet ipsa deleniti veniam? Ut porro libero nisi obcaecati exercitationem? Quis numquam unde maiores aperiam soluta excepturi hic voluptatem quibusdam blanditiis maxime architecto mollitia, temporibus placeat error? Accusantium, id!
                Delectus vero eius quis velit, unde libero exercitationem fugit sequi vel ullam quas mollitia minus? Id hic consequuntur, dolor aliquam sit quae et, error maxime eos quidem non exercitationem atque.`,
        },
        {
            profilePicturePath: LuizaPng,
            name: "Luiza Guimarães",
            testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugit? Quas blanditiis libero cumque atque officiis suscipit provident rerum molestiae aut quod. Optio suscipit rerum autem corporis totam a aperiam?
                Dolore amet ipsa deleniti veniam? Ut porro libero nisi obcaecati exercitationem? Quis numquam unde maiores aperiam soluta excepturi hic voluptatem quibusdam blanditiis maxime architecto mollitia, temporibus placeat error? Accusantium, id!
                Delectus vero eius quis velit, unde libero exercitationem fugit sequi vel ullam quas mollitia minus? Id hic consequuntur, dolor aliquam sit quae et, error maxime eos quidem non exercitationem atque.`,
        },
        {
            profilePicturePath: LuizaPng,
            name: "Luiza Guimarães",
            testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugit? Quas blanditiis libero cumque atque officiis suscipit provident rerum molestiae aut quod. Optio suscipit rerum autem corporis totam a aperiam?
                Dolore amet ipsa deleniti veniam? Ut porro libero nisi obcaecati exercitationem? Quis numquam unde maiores aperiam soluta excepturi hic voluptatem quibusdam blanditiis maxime architecto mollitia, temporibus placeat error? Accusantium, id!
                Delectus vero eius quis velit, unde libero exercitationem fugit sequi vel ullam quas mollitia minus? Id hic consequuntur, dolor aliquam sit quae et, error maxime eos quidem non exercitationem atque.`,
        },
        {
            profilePicturePath: LuizaPng,
            name: "Luiza Guimarães",
            testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugit? Quas blanditiis libero cumque atque officiis suscipit provident rerum molestiae aut quod. Optio suscipit rerum autem corporis totam a aperiam?
                Dolore amet ipsa deleniti veniam? Ut porro libero nisi obcaecati exercitationem? Quis numquam unde maiores aperiam soluta excepturi hic voluptatem quibusdam blanditiis maxime architecto mollitia, temporibus placeat error? Accusantium, id!
                Delectus vero eius quis velit, unde libero exercitationem fugit sequi vel ullam quas mollitia minus? Id hic consequuntur, dolor aliquam sit quae et, error maxime eos quidem non exercitationem atque.`,
        },
        {
            profilePicturePath: LuizaPng,
            name: "Luiza Guimarães",
            testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugit? Quas blanditiis libero cumque atque officiis suscipit provident rerum molestiae aut quod. Optio suscipit rerum autem corporis totam a aperiam?
                Dolore amet ipsa deleniti veniam? Ut porro libero nisi obcaecati exercitationem? Quis numquam unde maiores aperiam soluta excepturi hic voluptatem quibusdam blanditiis maxime architecto mollitia, temporibus placeat error? Accusantium, id!
                Delectus vero eius quis velit, unde libero exercitationem fugit sequi vel ullam quas mollitia minus? Id hic consequuntur, dolor aliquam sit quae et, error maxime eos quidem non exercitationem atque.`,
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
        >
            {testimonialCards.map((testimonialCard) => (
                <CarouselElement>
                    <div className="testimonial-header">
                        <img src={testimonialCard.profilePicturePath} alt="profile-icon" />
                        <p>{testimonialCard.name}</p>
                    </div>
                    <div className="testimonial-text">
                        <img
                            className="open-quotes"
                            width={"20px"}
                            height={"20px"}
                            src={OpenQuotes}
                            alt="chat quotes"
                        />
                        <p>{testimonialCard.testimonial}</p>
                        <img
                            className="close-quotes"
                            width={"20px"}
                            height={"20px"}
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
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: var(--shadow);
    color: white;
    border-radius: 15px;
    border: 2px solid var(--white);
    .testimonial-header {
        display: flex;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        p {
            margin-left: 25px;
        }
    }
    .testimonial-text {
        display: flex;
        position: relative;
        margin-top: 8%;
        padding: 20px;
        p {
            text-align: left;
        }
        .open-quotes {
            position: absolute;
            width: 20px;
            top:0;
            left:0;
        }
        .close-quotes {
            position: absolute;
            width: 20px;
            bottom:0;
            right:0;
        }
    }
`;

const ArrowStyle = styled.button`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const IndicatorStyles = styled.li`
    background: var(--grey);
    width: 15px;
    height: 15px;
    display: inline-block;
    margin: 0 8px;
    border-radius: 50%;
`;
