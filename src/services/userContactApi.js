import api from "./api";

export async function userContact(body, token) {
    const response = await api.post("/contact", body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}
