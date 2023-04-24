import styled from "styled-components";

export default function Buttons({ onPage = -1, setOnPage, lastPage = true, disabled = false }) {
    return (
        <ButtonsBox justifyContent={(lastPage && onPage === -1) || onPage === 0 ? "flex-end" : "space-between"} >
            {lastPage ?
                <div className="Button">
                    {onPage > 0 && <button className="backBtn" type="button" onClick={() => setOnPage(onPage - 1)}>Voltar</button>}

                    <button type="submit" name="button" disabled={disabled}>Enviar</button>
                </div>
                : (
                    <div className="Button">
                        {onPage > 0 && <button className="backBtn" type="button" onClick={() => setOnPage(onPage - 1)}>Voltar</button>}

                        <button type="button" onClick={() => setOnPage(onPage + 1)}>Próxima</button>
                    </div>
                )}
        </ButtonsBox>
    );
}

const ButtonsBox = styled.div`
    button{
        border: none;
        border-radius: 5px;
        font-weight: 700;
        font-size: clamp(.75em, .5em + .6vw, 5vw);
        height: 6vh;
        width: 10vw;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        transition: .5s;
    }

    button:hover{
        filter: brightness(1.2);
        color: var(--white);
        background: var(--pink);
    }

    .Button{
        width: 26vw;
        position: absolute;
        margin-top: 8rem;
        margin-left: -2.5%;
        display: flex;
        justify-content: ${props => props.justifyContent};
    }

    .backBtn:hover{
        background: var(--blue);
    }
`;
