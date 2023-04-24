import styled from "styled-components";

export default function RadioInput({ label, name, value, onChange }) {
    return (
        <Container>
            <input type="radio" name={name} value={value} onClick={onChange} />
            <p>{label}</p>
        </Container>
    );
}

const Container = styled.label`
    display: flex;
    position: relative;
    gap: .5rem;

    input {
        width: 1.75em;
        height: 1.75em;
    }

    p {
        font-weight: 400;
    }
`;
