import api from "./api";

export async function signIn(email, password) {
    const response = await api.post("/auth/sign-in", { email, password });
    return response.data;
}

export async function signInGoogle(credential) {
    const response = await api.post("/auth/sign-in/google", { credential });
    return response.data;
}
