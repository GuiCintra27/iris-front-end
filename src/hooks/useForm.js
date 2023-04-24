import { useState } from "react";

export const useForm = (options) => {
    const [data, setData] = useState(options?.initialValues || {});
    const [errors, setErrors] = useState({});

    const handleChange = (key, sanitizeFn) => (e) => {
        const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;

        setData({
            ...data,
            [key]: value,
        });
    };

    const phoneHandleChange = (key, sanitizeFn) => (e) => {
        const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
        const valueNumbers = value?.replace("(", "")?.replace(")", "")?.replace(" ", "")?.replace("-", "");

        if (data[key]?.length > value?.length) {
            setData({
                ...data,
                [key]: value,
            });
            return;
        }

        const valid = Number(valueNumbers[valueNumbers.length - 1]);

        if (valueNumbers[valueNumbers.length - 1] === "0" || valid) {
            if (valueNumbers.length <= 11) {
                switch (valueNumbers.length) {
                case 1:
                    setData({
                        ...data,
                        [key]: "(" + valueNumbers,
                    });
                    break;

                case 2:
                    setData({
                        ...data,
                        [key]: "(" + valueNumbers + ")",
                    });
                    break;

                case 3: case 4: case 5: case 6: case 7:
                    setData({
                        ...data,
                        [key]: "(" + valueNumbers[0] + valueNumbers[1] + ")" + " " + valueNumbers.substr(2, valueNumbers.length-1), 
                    });
                    break;

                case 8: case 9: case 10: case 11:
                    setData({
                        ...data,
                        [key]: "(" + valueNumbers[0] + valueNumbers[1] + ")" + " " + valueNumbers.substr(2, 5) + "-" + valueNumbers.substr(7, valueNumbers.length-1), 
                    });
                    break;

                default:
                    break;
                }
            }
        } else {
            setData({
                ...data,
            });
        }
    };

    const customHandleChange = (key, sanitizeFn) => (inputValue) => {
        const value = sanitizeFn ? sanitizeFn(inputValue) : inputValue;
        setData({
            ...data,
            [key]: value,
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];
                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }

                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }

                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});

        if (options?.onSubmit) {
            options.onSubmit(data);
        }
    };

    return {
        setData,
        data,
        handleChange,
        phoneHandleChange,
        customHandleChange,
        handleSubmit,
        errors,
        setErrors,
    };
};
