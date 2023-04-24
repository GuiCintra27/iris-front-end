import api from "./api";

export async function sendDonateInformations(body, token) {
    const response = await api.post("/donate", body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}
