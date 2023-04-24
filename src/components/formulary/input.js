import styled from "styled-components";

export default function Input({ label, type, value, name, onChange, placeHolder }) {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <input type={type} value={value} name={name} onChange={onChange} placeholder={placeHolder} />
        </Container>
    );
}

const Container = styled.div`
    margin-top: 3.5vh;
    display: flex;
    flex-direction: column;

    label {
        font-weight: 700;
        font-size: clamp(0.6em, 0.5em + 0.5vw, 5vw);
        margin-bottom: 1rem;
    }

    input {
        display: block;
        position: relative;
        padding-left: 2%;
        height: 4.35vh;
        width: 19.5vw;
        border-radius: 3px;
        border: 2px solid var(--blue);

        &::placeholder {
            font-size: 12px;
        }
    }
`;
