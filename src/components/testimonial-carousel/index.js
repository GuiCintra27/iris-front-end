import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OpenQuotes from "../../assets/Icons/open-quotes.svg";
import CloseQuotes from "../../assets/Icons/close-quotes.svg";
import rodrigoPng from "../../assets/Testimonials/rodrigo.png";
import driPng from "../../assets/Testimonials/dri.png";
import jayPng from "../../assets/Testimonials/jay.png";
import enioPng from "../../assets/Testimonials/enio.png";
import enzoPng from "../../assets/Testimonials/enzo.png";
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
            profilePicturePath: rodrigoPng,
            name: "Rodrigo Borges",
            testimonial: "Quando me inscrevi no processo seletivo da Íris, minha motivação principal era me conhecer. Conhecer a história da comunidade a qual faço parte. De amar, me expressar e de ser quem eu sou. A Iniciativa me proporcionou tudo isso. Ela não apenas compartilhou parte de minha história, ela me mudou. E não digo apenas em um âmbito interpessoal. A Íris me ajudou a conquistar uma bolsa integral de intercâmbio na Índia, resultado das potentes reuniões com o pilar de Oportunidades. Aqui criei amizades com pessoas extraordinárias, que diariamente buscam e fazem a mudança. Hoje, para mim, a Íris é uma família.",
        },
        {
            profilePicturePath: driPng,
            name: "Andriély Fraga",
            testimonial: "Foi uma experiência incrível! Eu aprendi muito e consegui conhecer diversas pessoas. Além do voluntariado, a Íris me mostrou o verdadeiro significado de familia. Familia é o nosso laço mais querido, não precisa ter o mesmo sangue basta sentir o mesmo amor. O meu tempo na Íris acumulou os momentos mais felizes que vivenciei. Pude viver momentos de compartilhamento perfeitos com a comunidade ao mesmo tempo que aprendi muito com os colaboradores da Íris. Eu descreveria essa iniciativa como uma troca de objetivos e realidades que se encontram no final com o mesmo propósito: ser um lugar de conforto.",
        },
        {
            profilePicturePath: jayPng,
            name: "Jay Oliveira",
            testimonial: "As reuniões da Íris sempre foram muito receptivas e calorosas. Foram momentos para descontrair com temáticas super interessantes e atuais. Refletimos sobre nós mesmos e sobre os nossos amigos, pensando num futuro acolhedor e representativo. A comunidade Íris sempre vai estar guardada na minha memória. Foi uma experiência incrível!",
        },
        {
            profilePicturePath: enioPng,
            name: "Enio Ferreira",
            testimonial: "Fazer parte do corpo de voluntários da Iniciativa Íris foi uma das melhores coisas que já aconteceram comigo. Poder ajudar a construir esse projeto tão especial, que traz um enorme senso comunitário e um local seguro para tantos jovens LGBTQIA+ é uma honra. A todos que já passaram nesse breve tempo que estamos na ativa, é muito significativo sentir que todos ainda estão conectados como uma família. Só posso sentir orgulho e muito carinho por essa iniciativa e por tantas experiências que me proporcionou. Espero que esse projeto que me impactou como pessoa, venha crescer ainda mais e impactar mais jovens.",
        },
        {
            profilePicturePath: enzoPng,
            name: "Enzo Ferreira",
            testimonial: "A Iniciativa Íris é um pedaço de mim, uma verdadeira comunidade em que sempre há espaço para compartilhar medos, felicidades, angústias e vivências do dia de uma pessoa queer. Tenho certeza que qualquer pessoa que teve algum contato com a iniciativa tem um carinho pela entrega da equipe junto a interação da comunidade durantes estes dois primeiros ciclos.",
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
            stopOnHover={true}
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
            width: 75px;
            height: 75px;
            border-radius: 50%;
        }
        p {
            font-family: 'Inter', sans-serif;
            font-size: clamp(13px, .5em + 1vw, 35px);
            margin-left: 25px;
        }
    }

    .testimonial-text {
        padding: 30px;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        container-type: inline-size;
        img{
            width: 24px;
        }
        p {
            margin-top: -10px;
            text-align: left;
            font-weight: 500;
            font-size: 2.6cqi;
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
