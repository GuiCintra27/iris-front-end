import { useState } from "react";
import styled from "styled-components";

export default function TextBox({ title, text, height }) {
    const [toggle, setToggle] = useState(false);

    return (
        <Box height={height}>
            <div className={toggle ? "boxTitle show" : "boxTitle"} onClick={() => setToggle(!toggle)}>
                <h3>{title}</h3>
                <div className="Arrow"></div>
            </div>
            <div className={toggle ? "boxContent show" : "boxContent"}>
                {text && text.map(item => <p>{item}</p>)}
            </div>
        </Box>
    );
}

const Box = styled.div`

margin-top: 3rem;
    margin-bottom: 3rem;

    .boxTitle{
        display: flex;
        justify-content: space-between !important;
        align-items: center;
        height: 5vw;
        padding-inline: 2.4vw;
        border: 2px solid var(--pink);
        cursor: pointer;

        &.show{
            background: var(--pink);
        }
        
        h3{
            color: var(--pink);
            font-size: clamp(.5em, .5em + .7vw, 5vw);
        }

        &.show h3{
            color: var(--white);
        } 
    }

    .Arrow{
        border-top: 2px solid var(--pink);
        width: clamp(7.5px, 1vw, 1vw) !important;
        transform: rotate(45deg) translateY(1rem);
        transition: .5s;
    }

    .boxTitle.show .Arrow{
        transform: rotate(225deg) translate(-.3vw, .3vw);
        border-color: var(--white);
        transition: .5s;
    }

    .Arrow::after{
        content: '';
        display: block;
        width: clamp(7.5px, 1vw, 1vw);
        height: 1.6px;
        margin-top: 5px;
        transition: .3s;
        transform: rotate(270deg) translate(.95vw,.45vw);
        position: relative;
        background: var(--pink);
    }

    .boxTitle.show .Arrow::after{
        background: var(--white);
    }

    .boxContent{
        height: 0;
        padding-inline: 1.8vw;
        overflow: hidden;
        background: var(--white);
        transition: .9s;
        
        p{
            text-align: left;
            margin-bottom: 3rem;
        }
    }

    .boxContent.show{
        height: ${props => props.height};
        padding-top: 1.5vh;
        border: 2px solid var(--pink);
        transition: .9s;
    }
`;
