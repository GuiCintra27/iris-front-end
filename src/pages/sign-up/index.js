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
import { useState, useEffect } from "react";
import CustomRadioButton from "../../components/formulary/customRadioButton";
import Select from "../../components/formulary/select";
import useSignUp from "../../hooks/api/useSignUp";
import useSaveSignUp from "../../hooks/api/useSaveSignUp";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useSignIn from "../../hooks/api/useSignIn";
import TempContext from "../../contexts/TempContext";
import TreeDotsLoading from "../../components/loadings/tree-dots-loading";
import { ColorRing } from "react-loader-spinner";

dayjs.extend(CustomParseFormat);

export default function SignUp() {
    const { registerData, registerDataLoading } = useSignUp();
    const { signUpLoading, signUp } = useSaveSignUp();
    const { signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);
    const [secondPage, setSecondPage] = useState(false);
    const navigate = useNavigate();
    const { tempData } = useContext(TempContext);

    useEffect(() => {
        if (tempData.name) {
            data.name = tempData.name;
            data.email = tempData.email;
            if (tempData.birthday) {
                const { year, month, day } = tempData.birthday;
                const parsedDate = `${year}-${month}-${day}`;
                data.birthDay = parsedDate;
                customHandleChange("birthDay", (d) => d && dayjs(d))(parsedDate);
            }
        }
    }, [tempData]);

    const { handleSubmit, handleChange, phoneHandleChange, customHandleChange, data, errors, setErrors } = useForm({
        validations: FormValidations,

        //eslint-disable-next-line
        onSubmit: async (data) => {
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

    if (!registerData || registerDataLoading) {
        return (
            <AuthLayout topFrame={topFrame} mainFrame={mainFrame} arrowIndicator={!secondPage}>
                <main>
                    <ColorRing
                        visible={true}
                        height="150"
                        width="150"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]}
                    />
                </main>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout topFrame={topFrame} mainFrame={mainFrame} arrowIndicator={!secondPage}>
            <main>
                <div>
                    <h4>
                        Já possui uma conta? <Link to={"/sign-in"}>Conecte-se</Link>
                    </h4>
                </div>
                <div>
                    <h2>{tempData.email ? "Nos Conte Mais Sobre Você" : "Cadastre-se em segundos!"}</h2>
                    <div id="page-counter">
                        <div>
                            <p id="arrow-indicator">{!secondPage ? "1" : "2"}</p>
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
                                {!tempData.name && (
                                    <MaterialInputBox
                                        type={"text"}
                                        name={"name"}
                                        label={"Nome"}
                                        value={data?.name || ""}
                                        onChange={handleChange("name")}
                                        required
                                        disabled={signUpLoading}
                                    />
                                )}

                                {!tempData.email && (
                                    <MaterialInputBox
                                        type={"email"}
                                        name={"email"}
                                        value={data?.email || ""}
                                        onChange={handleChange("email")}
                                        disabled={tempData.email || signUpLoading}
                                        label={"Email"}
                                        required
                                    />
                                )}

                                <MaterialInputBox
                                    type={"tel"}
                                    name={"phoneNumber"}
                                    label={signUpLoading ? null : "Número de Celular"}
                                    value={data?.phoneNumber || ""}
                                    onChange={phoneHandleChange("phoneNumber")}
                                    required
                                    disabled={signUpLoading}
                                />

                                <CustomDatePicker
                                    name="birthDay"
                                    error={false}
                                    helperText={null}
                                    format="dd-MM-yyyy"
                                    label="Data de Nascimento"
                                    inputVariant="outlined"
                                    clearable
                                    value={dayjs(data.birthDay)}
                                    onChange={(date) => {
                                        customHandleChange("birthDay", (d) => d && dayjs(d))(date);
                                    }}
                                    disabled={signUpLoading}
                                />

                                <MaterialInputBox
                                    type={"password"}
                                    name={"password"}
                                    label={signUpLoading ? null : "Senha"}
                                    value={data?.password || ""}
                                    onChange={handleChange("password")}
                                    required
                                    disabled={signUpLoading}
                                />

                                <button type="button" name="cadastrar" onClick={() => setSecondPage(true)}>
                                    {signUpLoading ? <TreeDotsLoading color={"--white"} /> : "Cadastrar"}
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
                                            checked={Number(data.pronounsId) === item.id}
                                            onChange={handleChange("pronounsId")}
                                            key={key}
                                            disabled={signUpLoading}
                                        />
                                    ))}
                                </div>

                                <Select
                                    label={"Sexualidade"}
                                    name={"sexualityId"}
                                    value={data?.sexualityId}
                                    onChange={handleChange("sexualityId")}
                                    options={registerData?.sexualityId || []}
                                    disabled={signUpLoading}
                                />

                                <Select
                                    label={"Identidade de Gênero"}
                                    name={"genderId"}
                                    value={data?.genderId}
                                    onChange={handleChange("genderId")}
                                    options={registerData?.genderId || []}
                                    disabled={signUpLoading}
                                />

                                <button type="submit" name="signUp" disabled={signUpLoading}>
                                    {signUpLoading ? <TreeDotsLoading color={"--white"} /> : "Cadastrar"}
                                </button>
                            </>
                        )}

                        {!tempData.name && <GoogleOauth />}
                        {!tempData.name && <FacebookOauth />}
                    </form>
                </MuiPickersUtilsProvider>
            </main>
        </AuthLayout>
    );
}
