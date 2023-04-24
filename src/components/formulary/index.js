import styled from "styled-components";
import arrow from "../../assets/Icons/arrow.svg";

export default function Form({ title, children, subtitle }) {
    return (
        <Formulary>
            <div id="title">
                <div>
                    <h3>{title}</h3>
                    {subtitle && <h4>{subtitle}</h4>}
                </div>
                <img src={arrow} alt="Seta indicadora" />
            </div>

            <div className="form">{children}</div>
        </Formulary>
    );
}

const Formulary = styled.div`
    margin-bottom: 5rem;

    #title {
        display: flex;

        & div {
            margin-left: 18vw;
            margin-top: 11vh;
            display: flex;
            flex-direction: column;

            h3 {
                font-size: clamp(0.8em, 0.5em + 1vw, 5vw);
            }
            h4 {
                font-size: 12px;
                font-weight: 400;
                color: var(--dark-grey);
            }
        }

        & img {
            margin-top: 11.5vh;
            width: clamp(10px, 2vw, 72px);
            height: clamp(10px, 2vw, 72px);
        }
    }

    .form {
        margin-left: 36.5vw;
        min-width: 300px;
        width: 26vw;
        background-color: var(--white);
        border: 2px solid var(--blue);
        padding-top: 3vh;
        padding-inline: 2.3vw;
        padding-bottom: 5rem;
        border-radius: 10px;
        box-sizing: border-box;
        box-shadow: 1px 1px 5px #0b0b0b;
    }

    .options-title {
        margin-top: 3.2vh;
        margin-bottom: 30px;
        font-weight: 700;
        font-size: 16px;
    }

    .options {
        width: 100%;
        display: flex;
        gap: 3rem;
        align-items: center;
        padding-left: 1.2vw;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
`;
