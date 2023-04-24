import api from "./api";

export async function signUp({ name, email, phoneNumber, birthDay, sexualityId, genderId, pronounsId, password }) {
    const response = await api.post("/users", {
        name,
        email,
        phoneNumber,
        birthDay,
        sexualityId,
        genderId,
        pronounsId,
        password,
    });
    return response.data;
}

export async function getSignUpData() {
    const response = await api.get("/users/data");
    return response.data;
}
