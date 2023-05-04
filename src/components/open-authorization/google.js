import styled from "styled-components";
import googleIcon from "../../assets/Icons/google-oauth.svg";
import { GoogleLogin } from "@react-oauth/google";
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

    const Toast = useMemo(() => Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    }), []);

    async function onSuccess(res) {
        try {
            const userData = await signIn(res.credential);
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
    // eslint-disable-next-line
    const onError = () => console.log("Login Failed");

    function handleClick() {
        document.querySelector("#signInDiv div[role=button]").click();
    }

    return (
        <>
            <Container id="signInDiv" onClick={handleClick}>
                <GoogleLogin onSuccess={onSuccess} onError={onError}/>
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
