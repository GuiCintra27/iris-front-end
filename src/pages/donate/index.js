import Footer from "../../components/footer/footer";
import FormContainer from "../../components/formulary";
import Header from "../../components/header/header";
import FormValidations from "./formValidations";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/formulary/input";
import Swal from "sweetalert2";
import RadioInput from "../../components/formulary/radioOptions";
import Buttons from "../../components/formulary/buttons";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useDonate from "../../hooks/api/useDonate";
import styled from "styled-components";

export default function Donate({ page }) {
    const { userData } = useContext(UserContext);
    const { donate, donateLoading } = useDonate();

    const { handleSubmit, handleChange, data, setData, errors, setErrors } = useForm({
        validations: FormValidations,
        
        //eslint-disable-next-line
        onSubmit: async (data) => {
            const newData = {
                amount: data.amount,
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

            if (!userData?.token) return err("O usuário precisa estar conectado para enviar uma doação");

            try {
                await donate(newData, userData?.token);
                setData({ amount: "", authorization: "" });

                Toast.fire({
                    icon: "success",
                    title: "Informação enviada",
                    customClass: "sweet-toast",
                });
            } catch (err) {
                Toast.fire({
                    icon: "error",
                    title: "Houve um problema ao registrar doação no servidor",
                    customClass: "sweet-toast",
                });
            }
        },

        initialValues: {
            amount: "",
            authorization: "",
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
        <>
            <Header page={page} />

            <FormContainer
                title={"Dados de contato"}
                subtitle={!userData?.token && "(É preciso estar conectado para realizar esta ação)"}
            >
                <form onSubmit={handleSubmit}>
                    <Input
                        label={"Quantia estimada para doação"}
                        type={"number"}
                        value={data?.amount}
                        name={"amount"}
                        onChange={handleChange("amount")}
                        placeHolder={"(Valor mínimo R$5,00)"}
                    />

                    <h4 className="options-title">
                        Você autoriza um membro da Iniciativa Íris entrar em contato com você para finalizar a doação?
                    </h4>
                    <div className="options">
                        <RadioInput
                            label={"Sim"}
                            name={"authorization"}
                            value={"Sim"}
                            onChange={handleChange("authorization")}
                        />
                        <RadioInput
                            label={"Não"}
                            name={"authorization"}
                            value={"Não"}
                            onChange={handleChange("authorization")}
                        />
                    </div>

                    <Buttons disabled={donateLoading} />
                </form>
            </FormContainer>

            <Margin />

            <Footer />
        </>
    );
}

const Margin = styled.div`
    margin-bottom: 17rem;
`;
