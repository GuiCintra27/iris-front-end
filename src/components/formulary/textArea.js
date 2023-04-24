import styled from "styled-components";

export default function TextArea({ label, value, name, onChange, minLength, maxLength }) {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <textarea
                value={value}
                name={name}
                onChange={onChange}
                minLength={minLength}
                maxLength={maxLength}
            />
        </Container>
    );
}

const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    label {
        font-weight: 700;
        font-size: clamp(0.6em, 0.5em + 0.5vw, 5vw);
        margin-bottom: 1rem;
    }

    textArea {
        margin-top: 1.1vh;
        padding-left: 2%;
        height: 10rem;
        width: 19.5vw;
        border-radius: 3px;
        border: 2px solid var(--blue);

        ::-webkit-scrollbar {
            width: 6px;
        }
    
        ::-webkit-scrollbar-thumb {
            border-radius: 1px !important;
        }
    }

`;
