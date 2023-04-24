import styled from "styled-components";

export default function Background({ name, background, position }) {
    return (
        <Bg background={background} position={position} >
            <div>
                <p>Iniciativa Íris</p>
                <div id="Circle"></div>
                <p>{name}</p>
            </div>
        </Bg>
    );
}

const Bg = styled.div`
    background: url(${props => props.background}) no-repeat;
    background-size: cover;
    background-position: ${props => props.position};
    -webkit-box-shadow: 0px -50px 35px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px -50px 35px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0px -200px 35px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 55vh;
    color: var(--white);
    font-size: clamp(.35em, .3em + .6vw, 5vw);

    & > div{
        display: flex;
        width: 20vw;
        gap: 1rem;
        transform: translate(35.8vw, 50vh);
    }

    #Circle{
        width: 1.2rem;
        height: 1.2rem;
        border: 3px solid var(--white);
        border-radius: 100%;
        opacity: .3;
        margin-top: 4px;
    }

    #Circle ~ p{
        color: var(--white);
        opacity: .6;
    }
`;
