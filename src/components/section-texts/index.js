import { Link } from "react-router-dom";
import styled from "styled-components";
import Founder from "./founder";
import TextBox from "./textBox";

export default function SectionText({ title, paragraphs, founders, onSection, index }) {
    return (
        <Section display={onSection === index ? "display: block" : "display: none"} >
            <h2>{title}</h2>

            {paragraphs && paragraphs.map((item, index) => <Paragraph key={index} subtitle={item.subtitle} image={item.image} text={item.text} list={item.list} textBox={item.textBox} button={item.button} />)}

            {founders && founders.map((item, index) => <Founder key={index} name={item.name} image={item.image} founderFunction={item.function} text={item.text} />)}
        </Section>
    );
}

function Paragraph({ subtitle, image, text, list, textBox, button }) {
    return (
        <div>
            {subtitle && <h4>{subtitle}</h4>}

            {image && <img className="sectionImage" src={image} alt="Imagem ilustrativa"/>}

            {text && <p>{text}</p>}

            {list &&
                <ul>
                    {list.map((item) => <li><span>{item}</span></li>)}
                </ul>
            }

            {textBox && <TextBox title={textBox.title} text={textBox.text} height={textBox.height} />}

            {button &&
                <div className="button">
                    <Link to={ button.link }>
                        <button>{button.title}</button>
                    </Link>
                </div>}
        </div>
    );
}

const Section = styled.div`
    padding-left: 8.5rem;
    padding-top: 6.5rem;
    ${props => props.display};

    h2{
        color: var(--blue);
        margin-bottom: 3vh;
    }

    div{
        width: 52vw;
    }

    p{
        text-align: justify;
        font-size: clamp(.5em, .5em + .45vw, 5vw);
        font-weight: 300;
        margin-bottom: 4rem;
    }

    h4{
        font-weight: 500;
        margin-bottom: 2rem;
    }

    ul li{
        margin-left: 3.6vw;
        margin-top: 1.5vh;
        font-weight: 300;
        color: var(--pink);
    }

    ul li span{
        color: var(--black);
    }

    .sectionImage{
        width: 40%;
        aspect-ratio: 3/2;
        object-fit: contain;
    }

    .button{
        background-color: transparent;
    }

    button{
        height: 5rem;
        width: 43rem;
        border-radius: 5px;   
        border: none;
        font-weight: 700;
        font-size: clamp(.75em, .5em + .6vw, 5vw);
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        transition: .7s;

        &:hover{
            filter: brightness(1.2);
            color: var(--white);
            background: var(--pink);
            transition: .7s;
        }
    }
`;
