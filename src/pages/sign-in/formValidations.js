const validations = {
    email: {
        custom: {
            isValid: (value) => isValidEmail(value),
            message: "Digite um email válido",
        },
    },
    password: {
        custom: {
            isValid: (value) => value.length >= 6,
            message: "Sua senha deve ter pelo menos seis dígitos",
        },
    },
};

export default validations;

function isValidEmail(value) {
    if (!value.includes("@")) return false;
    if (!value.includes(".com") && !value.includes(".net") && !value.includes(".edu") && !value.includes(".br"))
        return false;
    return value || value?.trim();
}
