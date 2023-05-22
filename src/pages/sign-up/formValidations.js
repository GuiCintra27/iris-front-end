import dayjs from "dayjs";

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
            message: "A idade mínima para criar uma conta é de 13 anos",
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
    if (!dayjs(value?.$d).isValid()) return false;
    if (dayjs().diff(value?.$d, "year") < 8) return false;

    return true;
}
