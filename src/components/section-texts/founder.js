import styled from "styled-components";

export default function Founder({ name, image, founderFunction, text }) {
    return (
        <FounderSection>
            <div>
                <div className="Image">
                    <img src={image} alt={name}/>
                </div>

                <div>
                    <p>{name}</p>
                    <h4>{founderFunction}</h4>
                </div>
            </div>

            <br />

            <p>{text}</p>
        </FounderSection>
    );
}

const FounderSection = styled.div`
    p{
        width: 39.5vw;
        margin-left: 9vw;
    }

    h2{
        margin-bottom: 3vh;
    }

    div{
        display: flex;
    }

    div > :nth-child(2){
        display: block;
        width: 26vw;
        height: 14vh;
        transform: translate(.65vw, 4.3vh);
        padding: 0;
    }

    div > div img{
        clip-path: circle(50% at 50% 50%);
    }

    div p{
        margin-left: 0;
        width: auto;
        font-size: clamp(.75em, .9em + .7vw, 5vw);
        font-weight: 500;
    }

    div div h4{
        margin-top: -4.2vh;
        width: 19.75vw !important;
        height: 3vh !important;
        font-size: clamp(.5em, .35em + .7vw, 5vw);
    }

    .Space{
        margin-top: 11vh;
    }

    .Image{
        width: 9.73vw !important;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 9.73vw;
        border: 3px solid var(--grey);
        border-radius: 100%;
        position: relative;
    }

    .Image img{
        position: absolute;
        width: 92%;
        object-fit: contain;
    }
`;
