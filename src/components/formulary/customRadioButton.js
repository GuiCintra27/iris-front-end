import styled from "styled-components";

export default function CustomRadioButton({ label, ...props }) {
    return (
        <StyledRadioButton>
            <input required type="radio" {...props} />
            <span>{label}</span>
        </StyledRadioButton>
    );
}

const StyledRadioButton = styled.label`
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;

    input {
        position: absolute;
        opacity: 0;
        &:checked + span {
            background-color: var(--soft-blue);
            &:before {
                box-shadow: inset 0 0 0 0.4375em var(--blue);
            }
        }
    }
    span {
        display: flex;
        align-items: center;
        padding: 0.375em 0.75em 0.375em 0.375em;
        border-radius: 99em; // or something higher...
        transition: 0.25s ease;
        &:hover {
            background-color: var(--soft-blue);
        }
        &:before {
            display: flex;
            flex-shrink: 0;
            content: "";
            background-color: #fff;
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            margin-right: 0.375em;
            transition: 0.25s ease;
            box-shadow: inset 0 0 0 0.125em var(--blue);
            font-size: 18px;
        }
    }
`;
