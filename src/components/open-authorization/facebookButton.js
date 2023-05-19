import SocialLogin from "react-social-login";
import { ColorRing } from "react-loader-spinner";
import styled from "styled-components";

function SocialButton({ children, triggerLogin, ...props }) {
    return (
        <button onClick={triggerLogin} {...props}>
            {children}
        </button>
    );
}

const Loader = () => <ColorRing />;

const FacebookLoginButton = styled(SocialLogin(SocialButton, Loader))`
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

export default FacebookLoginButton;
