import styled from "styled-components";
import googleIcon from "../../assets/Icons/google-oauth.svg";
import { useGoogleLogin } from "@react-oauth/google";
import { useSignInGoogle } from "../../hooks/api/useSignIn";
import UserContext from "../../contexts/UserContext";
import TempContext from "../../contexts/TempContext";
import { useContext } from "react";
import { useMemo } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

export default function GoogleOauth() {
    const { signIn } = useSignInGoogle();
    const { setUserData } = useContext(UserContext);
    const { setTempData } = useContext(TempContext);
    const navigate = useNavigate();
    const location = useLocation();

    const Toast = useMemo(
        () =>
            Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            }),
        [],
    );

    async function onSuccess(res) {
        try {
            const userData = await signIn(res.access_token);
            setUserData(userData);
            Toast.fire({
                icon: "success",
                title: "Usuário logado",
                customClass: "sweet-toast",
            });
            navigate("/");
        } catch (err) {
            if (err.response?.status === 404) {
                setTempData(err.response.data);
                navigate("/sign-up");
            }
        }
    }

    function onError() {
        Toast.fire({
            icon: "error",
            title: "Houve um problema ao se conectar ao Google",
            customClass: "sweet-toast",
        });
    }

    const login = useGoogleLogin({
        onSuccess,
        onError,
        scope: "https://www.googleapis.com/auth/user.birthday.read",
    });

    return (
        <>
            <Container id="signInDiv" onClick={login}>
                <img src={googleIcon} alt="google icon" />
                <p>{location.pathname === "/sign-in" ? "Entrar" : "Cadastrar"} com Google</p>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 21.5vw;
    height: 53px;
    margin-top: 30px;

    background: #ffffff;
    border: 1px solid #35cced;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    cursor: pointer;

    img {
        width: 36px;
    }

    div {
        display: none;
    }
`;
