const validations = {
    amount: {
        custom: {
            isValid: (value) => isValidNumber(value),
            message: "Digite uma quantia válida",
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

function isValidNumber(value) {
    if (isNaN(value)) return false;
    if (value < 5) return false;
    return value || value?.trim();
}
