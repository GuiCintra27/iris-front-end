import styled from "styled-components";
import facebookIcon from "../../assets/Icons/facebook-oauth.svg";
import Swal from "sweetalert2";
import FacebookLoginButton from "./facebookButton";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import TempContext from "../../contexts/TempContext";
import { useSignInFacebook } from "../../hooks/api/useSignIn";
import { useContext } from "react";

export default function FacebookOauth() {
    const { signIn } = useSignInFacebook();
    const { setUserData } = useContext(UserContext);
    const { setTempData } = useContext(TempContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSocialLoginFailure = (err) => {
        Swal.fire({
            icon: "warning",
            title: "Indisponível",
            text: "O Facebook está indisponível no momento, tente novamente mais tarde",
        });
    };

    async function onSuccessFacebookAuthentication(user) {
        try {
            const userData = await signIn(user.token.accessToken);
            setUserData(userData);
            Swal.fire({
                icon: "success",
                title: "Usuário logado",
                customClass: "sweet-toast",
            });
            navigate("/");
        } catch (err) {
            setTempData({
                name: user.profile.firstName + " " + user.profile.lastName,
                email: user.profile.email,
            });
            navigate("/sign-up");
        }
    }

    return (
        <Container>
            <FacebookLoginButton
                provider="facebook"
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                onLoginSuccess={onSuccessFacebookAuthentication}
                onLoginFailure={handleSocialLoginFailure}
                version="v16.0"
                scope="user_birthday"
            >
                <img src={facebookIcon} alt="facebook icon" />
                <p>{location.pathname === "/sign-in" ? "Entrar" : "Cadastrar"} com Facebook</p>
            </FacebookLoginButton>
        </Container>
    );
}

const Container = styled.div`
    && button {
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
        color: black;
        cursor: pointer;

        font-weight: 400;
        img {
            width: 40px;
        }
    }
`;
