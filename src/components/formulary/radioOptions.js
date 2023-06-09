import { forwardRef } from "react";
import styled from "styled-components";

const RadioInput = forwardRef(function RadioInput({ label, ...props }, ref) {
    return (
        <Container>
            <input type="radio" {...props} ref={ref} />
            <p>{label}</p>
        </Container>
    );
});

const Container = styled.label`
    display: flex;
    position: relative;
    gap: 0.5rem;

    input {
        width: 1.75em;
        height: 1.75em;
    }

    p {
        font-weight: 400;
    }
`;

export default RadioInput;
