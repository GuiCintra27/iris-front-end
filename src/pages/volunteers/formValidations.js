const validations = {
    linkedIn: {
        custom: {
            isValid: (value) => isValidLinkedIn(value),
            message: "Digite um linkedIn válido",
        },
    },
    occupation: {
        custom: {
            isValid: (value) => value?.trim().length >= 5,
            message: "Digite uma ocupação válida",
        },
    },
    irisParticipant: {
        custom: {
            isValid: (value) => value === "Sim" || value === "Não",
            // eslint-disable-next-line
            message: `Responda ao campo "Você fez parte da Comunidade Íris?"`,
        },
    },
    officeId: {
        custom: {
            isValid: (value) => !isNaN(value),
            message: "Selecione o cargo ao qual deseja se candidatar",
        },
    },
    skinColorId: {
        custom: {
            isValid: (value) => !isNaN(value),
            message: "Selecione o tom de pele ao qual você se identifica",
        },
    },
    applyingReason: {
        custom: {
            isValid: (value) => value?.trim().length >= 100 && value?.trim().length <= 200,
            message: "Sua descrição do porque deseja se candidatar deve ter entre 100 e 200 caracteres",
        },
    },
    experience: {
        custom: {
            isValid: (value) => value?.trim().length === 0 || value?.trim().length <= 1500,
            message: "Sua descrição de experiência deve ter no máximo 1500 caracteres",
        },
    },
    authorization: {
        custom: {
            isValid: (value) => value === "Sim",
            message: "É preciso autorizar o contato para enviar o formulário",
        },
    },
};

export default validations;

function isValidLinkedIn(value) {
    if (value?.trim().length === 0) return true;

    return value?.substr(0, 25) === "https://www.linkedin.com/";
}
