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
    phoneNumber: {
        custom: {
            isValid: (value) =>
                value?.replace("(", "")?.replace(")", "")?.replace(" ", "")?.replace("-", "").length === 11,
            message: "Digite um telefone válido",
        },
    },
    birthDay: {
        custom: {
            isValid: (value) => isValidDate(value),
            message: "A idade mínima para criar uma conta é de 8 anos",
        },
    },
    pronounsId: {
        custom: {
            isValid: (value) => !isNaN(value),
            message: "Selecione um pronome",
        },
    },
    sexualityId: {
        custom: {
            isValid: (value) => !isNaN(value),
            message: "Selecione uma sexualidade",
        },
    },
    genderId: {
        custom: {
            isValid: (value) => !isNaN(value),
            message: "Selecione um gênero",
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

function isValidName(value) {
    return value?.trim().length >= 3;
}

function isValidDate(value) {
    if (isNaN(new Date(value?.split("-").join("-")))) return false;
    if (new Date(value?.split("-").join("-")) > new Date(new Date().setFullYear(new Date().getFullYear() - 8)))
        return false;

    return value;
}
