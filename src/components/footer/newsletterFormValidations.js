const validations = {
    email: {
        custom: {
            isValid: (value) => isValidString(value),
            message: "Digite um email válido",
        },
    },
};

export default validations;

function isValidString(value) {
    if (!value.includes("@")) return false;
    if (!value.includes(".com") && !value.includes(".net") && !value.includes(".edu") && !value.includes(".br")) return false;
    return value || value?.trim();
}
