export default function CheckBoxOptions({ option }) {
    return (
        <div className="options">
            <p>{option.title}</p>

            {option.options.map((item, index) => <Option key={index} optionName={item.optionName} options={item.title} value={option.value} setValue={option.setValue} />)}
        </div>
    );
}

function Option({ optionName, options, value, setValue }) {
    return (
        <div className="option">
            <div>
                <input type="checkBox" name={optionName} onClick={() => verifyOption(options[0], value, setValue)} />
                <p>{options[0]}</p>
            </div>

            <div>
                <input type="checkBox" name={optionName} onClick={() => verifyOption(options[1], value, setValue)} />
                <p>{options[1]}</p>
            </div>
        </div>
    );
}

function verifyOption(option, value, setvalue) {
    const index = value.indexOf(option);

    if(index === -1) setvalue([...value, option]);
    else{
        const options = value.filter(item => item !== option);
        setvalue([...options]);
    }
}
