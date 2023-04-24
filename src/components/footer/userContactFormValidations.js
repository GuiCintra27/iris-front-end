const validations = {
    name: {
        custom: {
            isValid: (value) => isValidName(value),
            message: "Digite um nome válido",
        },
    },
    email: {
        custom: {
            isValid: (value) => isValidEmail(value),
            message: "Digite um email válido",
        },
    },
    telephone: {
        custom: {
            isValid: (value) =>
                value?.replace("(", "")?.replace(")", "")?.replace(" ", "")?.replace("-", "").length === 11,
            message: "Digite um telefone válido",
        },
    },
    message: {
        custom: {
            isValid: (value) => value?.length >= 20,
            message: "Sua mensagem deve ter pelo menos 20 caracteres",
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

function isValidName(value) {
    return value?.trim().length >= 3;
}
