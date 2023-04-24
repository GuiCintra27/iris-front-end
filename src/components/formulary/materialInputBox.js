import styled from "styled-components";

export default function MaterialInputBox({ type, name, value, onChange = () => 0, label }) {
    return (
        <Box>
            <input type={type} name={name} value={value} onChange={onChange} required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{label}</label>
        </Box>
    );
}

const Box = styled.div`
    position: relative;
    margin-bottom: 45px;

    input {
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 300px;
        height: 4rem;
        border: none;
        border-bottom: 1px solid #757575;
    }

    input:focus {
        outline: none;
    }

    input:valid{
        background-color: #F4F8FA;
    }

    /* LABEL ======================================= */
    label {
        color: #999;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    /* active state */
    input:focus ~ label,
    input:valid ~ label {
        top: -20px;
        font-size: 14px;
        color: var(--blue);
    }

    /* BOTTOM BARS ================================= */
    .bar {
        position: relative;
        display: block;
        width: 300px;
    }
    .bar:before,
    .bar:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: var(--blue);
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }
    .bar:before {
        left: 50%;
    }
    .bar:after {
        right: 50%;
    }

    /* active state */
    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
        width: 50%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }

    /* active state */
    input:focus ~ .highlight {
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
        from {
            background: var(--blue);
        }
        to {
            width: 0;
            background: transparent;
        }
    }
    @-moz-keyframes inputHighlighter {
        from {
            background: var(--blue);
        }
        to {
            width: 0;
            background: transparent;
        }
    }
    @keyframes inputHighlighter {
        from {
            background: var(--blue);
        }
        to {
            width: 0;
            background: transparent;
        }
    }
`;
