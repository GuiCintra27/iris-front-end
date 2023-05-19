import styled from "styled-components";

export default function AuthLayout({ topFrame, mainFrame, arrowIndicator, children }) {
    return (
        <StyledContainer arrowIndicator={arrowIndicator ? "--black" : "--blue"}>
            {children}
            <div id="background">
                <img id="topFrame" src={topFrame} alt="Imagem topo" />
                <img id="mainFrame" src={mainFrame} alt="Imagem centro" />
            </div>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    overflow-y: overlay;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: grid;
    grid-template-columns: 4fr 6fr;

    #background {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        background-color: rgba(114, 61, 146, 17%);

        #topFrame {
            position: absolute;
            top: 0;
        }

        #mainFrame {
            margin-top: 290px;
            margin-inline: auto;
            width: 700px;
        }
    }

    h4 {
        font-size: 14px;
        a {
            color: var(--blue);

            &:hover {
                text-decoration: underline;
            }
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        position: relative;

        #page-counter{
            position: absolute;
            display: flex;
            top: 3rem;
            left: 5rem;
            gap: 1rem;
            color: var(--blue);

            #arrow-indicator{
                color: var(${props => props.arrowIndicator});
            }

            div{
                display: flex;
            }

            img{
                cursor: pointer;
                width: 24px;
            }
        }
    }

    h2 {
        margin-top: 3rem;
    }

    form {
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button {
            width: 21.5vw;
            height: 53px;
            border-radius: 4px;
            color: var(--white);
            background: var(--blue);
        }
        .radio-inputs {
            max-width: 300px;
            display: flex;
            gap: 1rem;
            margin-bottom: 45px;
            flex-wrap: wrap;
        }
        #pronouns-title {
            width: 100%;
            font-size: 16px;
            margin-bottom: 10px;
        }
    }
`;
