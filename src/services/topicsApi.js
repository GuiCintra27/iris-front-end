import api from "./api";

export async function getTopics() {
    const response = await api.get("/topics");

    return response.data;
}
