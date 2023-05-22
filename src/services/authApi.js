import api from "./api";

export async function signIn(email, password) {
    const response = await api.post("/auth/sign-in", { email, password });
    return response.data;
}

export async function signInGoogle(accessToken) {
    const response = await api.post("/auth/sign-in/google", { accessToken });
    return response.data;
}

export async function signInFacebook(accessToken) {
    const response = await api.post("/auth/sign-in/facebook", { accessToken });
    return response.data;
}
