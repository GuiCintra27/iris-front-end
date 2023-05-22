import styled from "styled-components";

export default function Select({ label, name, value, options, onChange, disabled }) {
    return (
        <SelectBox>
            <label>{label}</label>
            <select defaultValue={"Selecione"} name={name} onChange={onChange} disabled={disabled} required>
                <option value={value} disabled>
                    Selecione
                </option>
                {options.map((option, index) => (
                    <SelectOptions key={index} name={name} value={option.id} optionName={option.name} />
                ))}
            </select>
        </SelectBox>
    );
}

const SelectBox = styled.div`
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    
    label {
        font-weight: 700;
        font-size: clamp(0.6em, 0.5em + 0.5vw, 5vw);
        margin-bottom: 5px;
    }

    select {
        display: block;
        position: relative;
        margin-top: 1.1vh;
        padding-left: 2%;
        height: 35px;
        width: 19.5vw;
        border-radius: 3px;
        border: 2px solid var(--blue);
        background-color: #fff;
        font-size: 18px;

        &:valid{
            border-color: var(--blue);
        }
    }
`;

function SelectOptions({ name, value, optionName }) {
    return (
        <option name={name} value={value}>
            {optionName}
        </option>
    );
}
