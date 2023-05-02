import MaterialInputBox from "../../components/formulary/materialInputBox";
import AuthLayout from "../../layouts/auth";
import topFrame from "../../assets/Backgrounds/auth/top-frame.png";
import mainFrame from "../../assets/Backgrounds/auth/sign-up-main-frame.svg";
import rightArrowIcon from "../../assets/Icons/auth-right-arrow-icon.png";
import leftArrowIcon from "../../assets/Icons/auth-left-arrow-icon.png";

import { useForm } from "../../hooks/useForm";
import FormValidations from "./formValidations";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";
import { CustomDatePicker } from "../../components/formulary/CustomDatePicker";

import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import GoogleOauth from "../../components/open-authorization/google";
import FacebookOauth from "../../components/open-authorization/facebook";
import { useState } from "react";
import CustomRadioButton from "../../components/formulary/customRadioButton";
import Select from "../../components/formulary/select";
import useSignUp from "../../hooks/api/useSignUp";
import useSaveSignUp from "../../hooks/api/useSaveSignUp";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useSignIn from "../../hooks/api/useSignIn";
import TempContext from "../../contexts/TempContext";
import { useEffect } from "react";

dayjs.extend(CustomParseFormat);

export default function SignUp() {
    const { registerDataLoading, registerData } = useSignUp();
    const { signUp } = useSaveSignUp();
    const { signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);
    const [secondPage, setSecondPage] = useState(false);
    const navigate = useNavigate();
    const { tempData } = useContext(TempContext);

    useEffect(() => {
        if (tempData.name) {
            data.name = tempData.name;
            data.email = tempData.email;
        }
    }, [tempData]);

    const { handleSubmit, handleChange, phoneHandleChange, customHandleChange, data, errors, setErrors } = useForm({
        validations: FormValidations,

        onSubmit: async(data) => {
            const newData = {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber?.replace("(", "")?.replace(")", "")?.replace(" ", "")?.replace("-", ""),
                birthDay: dayjs(data.birthDay).toISOString(),
                password: data.password,
                pronounsId: data.pronounsId,
                sexualityId: data.sexualityId,
                genderId: data.genderId,
            };

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            try {
                await signUp(newData);
                const userData = await signIn(newData.email, newData.password);
                setUserData(userData);
                Toast.fire({
                    icon: "success",
                    title: "Usuário logado",
                    customClass: "sweet-toast",
                });
                navigate("/");
            } catch (err) {
                if (err.response?.status === 409) {
                    Toast.fire({
                        icon: "error",
                        title: "Email ou número de telefone já cadastrado",
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
            name: tempData.name || "",
            email: tempData.email || "",
            phoneNumber: "",
            birthDay: null,
            password: "",
            pronounsId: undefined,
            sexualityId: undefined,
            genderId: undefined,
        },
    });

    if (Object.values(errors)[0]) {
        const error = Object.values(errors)[0];

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
        });
        setErrors({});
    }

    return (
        <AuthLayout topFrame={topFrame} mainFrame={mainFrame}>
            <main>
                <div>
                    <h4>
                        Já possui uma conta? <Link to={"/sign-in"}>Conecte-se</Link>
                    </h4>
                </div>
                <div>
                    <h2>Cadastre-se em segundos!</h2>
                    <div id="page-counter">
                        <div>
                            <p id={!secondPage && "black"}>{!secondPage ? "1" : "2"}</p>
                            <p>/2</p>
                        </div>
                        <img
                            src={!secondPage ? rightArrowIcon : leftArrowIcon}
                            alt="Seta"
                            onClick={() => setSecondPage(!secondPage)}
                        />
                    </div>
                </div>

                <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
                    <form onSubmit={handleSubmit}>
                        {!secondPage ? (
                            <>
                                <MaterialInputBox
                                    type={"text"}
                                    name={"name"}
                                    value={data?.name || ""}
                                    onChange={handleChange("name")}
                                    label={"Nome"}
                                    required
                                />

                                <MaterialInputBox
                                    type={"email"}
                                    name={"email"}
                                    value={data?.email || ""}
                                    onChange={handleChange("email")}
                                    label={"Email"}
                                    required
                                />

                                <MaterialInputBox
                                    type={"tel"}
                                    name={"phoneNumber"}
                                    label={"Número de Celular"}
                                    value={data?.phoneNumber || ""}
                                    onChange={phoneHandleChange("phoneNumber")}
                                    required
                                />

                                <CustomDatePicker
                                    name="birthDay"
                                    error={false}
                                    helperText={null}
                                    format="dd-MM-yyyy"
                                    label="Data de Nascimento"
                                    inputVariant="outlined"
                                    clearable
                                    value={dayjs(data.birthDay).format("YYYY-MM-DD").toString()}
                                    onChange={(date) => {
                                        customHandleChange("birthDay", (d) => d && dayjs(d).format("YYYY-MM-DD"))(date);
                                    }}
                                />

                                <MaterialInputBox
                                    type={"password"}
                                    name={"password"}
                                    label={"Senha"}
                                    value={data?.password || ""}
                                    onChange={handleChange("password")}
                                    required
                                />

                                <button type="button" name="cadastrar" onClick={() => setSecondPage(true)}>
                                    Cadastrar
                                </button>
                            </>
                        ) : (
                            <>
                                <h4 id="pronouns-title">Quais são seus pronomes de preferência?</h4>
                                <div className="radio-inputs">
                                    {registerData?.pronounsId.map((item, key) => (
                                        <CustomRadioButton
                                            name={"pronounsId"}
                                            label={item.name}
                                            value={item.id}
                                            onChange={handleChange("pronounsId")}
                                            key={key}
                                        />
                                    ))}
                                </div>

                                <Select
                                    label={"Sexualidade"}
                                    name={"sexualityId"}
                                    value={data?.sexualityId}
                                    onChange={handleChange("sexualityId")}
                                    options={registerData?.sexualityId || []}
                                />

                                <Select
                                    label={"Identidade de Gênero"}
                                    name={"genderId"}
                                    value={data?.genderId}
                                    onChange={handleChange("genderId")}
                                    options={registerData?.genderId || []}
                                />

                                <button type="submit" name="signUp" disabled={registerDataLoading}>
                                    Cadastrar
                                </button>
                            </>
                        )}

                        {!tempData.name && <GoogleOauth />}

                        <FacebookOauth />
                    </form>
                </MuiPickersUtilsProvider>
            </main>
        </AuthLayout>
    );
}
