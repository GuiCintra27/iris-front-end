import styled from "styled-components";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import UserContext from "../../contexts/UserContext";
import FormValidations from "./userContactFormValidations";
import TextareaAutosize from "react-textarea-autosize";
import Swal from "sweetalert2";
import useUserContact from "../../hooks/api/useUserContact";

export default function UserContact() {
    const { userData } = useContext(UserContext);
    const { userContact, userContactLoading } = useUserContact();

    const { handleSubmit, handleChange, phoneHandleChange, data, setData, errors, setErrors } = useForm({
        validations: FormValidations,

        //eslint-disable-next-line
        onSubmit: async (data) => {
            const newData = {
                name: data.name,
                email: data.email,
                telephone: data.telephone?.replace("(", "")?.replace(")", "")?.replace(" ", "")?.replace("-", ""),
                message: data.message,
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

            if (!userData?.token) return err("O usuário precisa estar conectado para realizar esta ação");

            try {
                await userContact(newData, userData?.token);
                setData({ name: "", email: "", telephone: "", message: "" });

                Toast.fire({
                    icon: "success",
                    title: "Informação enviada",
                    customClass: "sweet-toast",
                });
            } catch (err) {
                Toast.fire({
                    icon: "error",
                    title: "Houve um problema ao registrar mensagem no servidor",
                    customClass: "sweet-toast",
                });
            }
        },

        initialValues: {
            name: "",
            email: "",
            telephone: "",
            message: "",
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
        <UserContactBox>
            <form onSubmit={handleSubmit}>
                <h1>Entre em contato</h1>
                <p>
                    Entre em contato conosco através deste rápido formulário! Basta preencher os dados e deixar sua
                    mensagem que retornaremos o mais rápido possível
                </p>

                <label htmlFor="name">Nome</label>
                <input type="text" value={data?.name} name="name" onChange={handleChange("name")} required />

                <label htmlFor="email">Email</label>
                <input type="email" value={data?.email} name="email" onChange={handleChange("email")} required />

                <label htmlFor="telephone">Telefone</label>
                <input
                    type="tel"
                    value={data?.telephone}
                    name="telephone"
                    onChange={phoneHandleChange("telephone")}
                    required
                />

                <label htmlFor="message">Deixe sua mensagem aqui...</label>
                <TextareaAutosize
                    type="text"
                    value={data?.message}
                    name="message"
                    onChange={handleChange("message")}
                    required
                />

                <button type="submit" disabled={userContactLoading}>
                    Enviar
                </button>
            </form>
        </UserContactBox>
    );
}

const UserContactBox = styled.div`
    margin-left: 10%;
    width: 30vw;
    font-weight: 200;
    font-size: clamp(0.6em, 0.3em + 1vw, 1vw);

    p {
        margin-top: 3%;
        margin-bottom: 5vh;
    }

    label {
        display: block;
        margin-top: 2.5%;
        margin-bottom: 2.5%;
    }

    label p,
    input,
    textArea {
        margin-left: 1.75vw;
    }

    input,
    textArea {
        border: none;
        border-bottom: 1px solid var(--black);
        width: 18vw;
        background: none;
        font-size: 1em;
    }

    textArea {
        padding-inline: 0.5rem;
        resize: none;
        height: 8rem;

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 1px !important;
        }
    }

    button {
        margin-top: 5.5%;
        border: none;
        background: none;
        margin-left: 19.5vw;
    }

    button:hover {
        color: var(--pink);
        transition: 0.5s;
    }
`;
