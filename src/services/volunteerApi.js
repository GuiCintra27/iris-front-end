import api from "./api";

export async function registerVolunteer(body, token) {
    const response = await api.post("/volunteer", body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function getVolunteerRegisterData() {
    const response = await api.get("/volunteer/data");

    return response.data;
}
