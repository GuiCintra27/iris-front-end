import api from "./api";

export async function subscribeOnNewsLetter(body) {
    const response = await api.post("/news-letter", body);

    return response.data;
}
