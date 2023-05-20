import MaterialInputBox from "../../components/formulary/materialInputBox";
import AuthLayout from "../../layouts/auth";
import topFrame from "../../assets/Backgrounds/auth/top-frame.png";
import mainFrame from "../../assets/Backgrounds/auth/sign-in-main-frame.svg";

import { useForm } from "../../hooks/useForm";
import FormValidations from "./formValidations";

import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import GoogleOauth from "../../components/open-authorization/google";
import FacebookOauth from "../../components/open-authorization/facebook";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useSignIn from "../../hooks/api/useSignIn";
import TempContext from "../../contexts/TempContext";
import Loading from "../../components/loading";

export default function SignIn() {
    const { signInLoading, signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);
    const { setTempData } = useContext(TempContext);
    const navigate = useNavigate();

    const { handleSubmit, handleChange, data, errors, setErrors } = useForm({
        validations: FormValidations,

        onSubmit: async(data) => {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            try {
                const userData = await signIn(data.email, data.password);
                setUserData(userData);
                Toast.fire({
                    icon: "success",
                    title: "Usuário logado",
                    customClass: "sweet-toast",
                });
                navigate("/");
            } catch (err) {
                if (err.response?.status === 401) {
                    Toast.fire({
                        icon: "error",
                        title: "Usuário ou senha incorretos",
                        customClass: "sweet-toast",
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "Houve um problema ao registrar usuário",
                        customClass: "sweet-toast",
                    });
                }
            }
        },

        initialValues: {
            email: "",
            password: "",
        },
    });

    if (Object.values(errors)[0]) {
        const error = Object.values(errors)[0];

        err(error);
        setErrors({});
    }

    function err(value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: value,
        });
    }

    return (
        <AuthLayout topFrame={topFrame} mainFrame={mainFrame}>
            <main>
                <div>
                    <h4>
                        Ainda não possui uma conta? <Link to={"/sign-up"} onClick={() => setTempData({})}>Cadastre-se</Link>
                    </h4>
                </div>
                <div>
                    <h2>Entre para uma melhor experiência!</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <MaterialInputBox
                        type={"email"}
                        name={"email"}
                        value={data?.email || ""}
                        onChange={handleChange("email")}
                        label={signInLoading? null : "Email"}
                        disabled={signInLoading}
                        required
                    />

                    <MaterialInputBox
                        type={"password"}
                        name={"password"}
                        label={signInLoading? null : "Senha"}
                        value={data?.password || ""}
                        onChange={handleChange("password")}
                        disabled={signInLoading}
                        required
                    />

                    <button type="submit" name="signIn" disabled={signInLoading}>
                        {signInLoading ? <Loading /> : "Entrar"}
                    </button>

                    <GoogleOauth />
                    <FacebookOauth />
                </form>
            </main>
        </AuthLayout>
    );
}
