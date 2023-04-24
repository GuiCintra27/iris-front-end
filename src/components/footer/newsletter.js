import styled from "styled-components";
import useNewsLetter from "../../hooks/api/useNewsLetter";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import FormValidations from "./newsletterFormValidations";

export default function Newsletter() {
    const { newsLetter } = useNewsLetter();

    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: FormValidations,

        onSubmit: async(data) => {
            const newData = {
                email: data.email,
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
                await newsLetter(newData);

                Toast.fire({
                    icon: "success",
                    title: "Email registrado",
                    customClass: "sweet-toast",
                });
            } catch (err) {
                if (err.response?.status === 409) {
                    Toast.fire({
                        icon: "error",
                        title: "Email já cadastrado",
                        customClass: "sweet-toast",
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "Houve um problema ao registrar seu email",
                        customClass: "sweet-toast",
                    });
                }
            }
        },

        initialValues: {
            email: "",
        },
    });

    function err(value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: value,
        });
        delete errors.email;
    }

    return (
        <MailLetterBox>
            <h1>FAÇA PARTE!</h1>
            <p>Fique por dentro de todas as novidades!</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Insira seu email aqui*"
                        value={data?.email || ""}
                        onChange={handleChange("email")}
                        required
                    />
                    {errors.email && err(errors.email)}
                    <button type="submit">Participar</button>
                </div>
            </form>
        </MailLetterBox>
    );
}

const MailLetterBox = styled.div`
    display: block;
    background: linear-gradient(to bottom, var(--blue), var(--blue) 90%, var(--soft-grey) 90%);
    text-align: center;
    width: 100%;
    color: var(--white);
    padding-top: 15rem;

    h1 {
        font-size: 450%;
        margin-bottom: 1rem;
    }

    p {
        font-size: 200%;
        font-weight: 500;
    }

    div {
        display: flex;
        justify-content: center;
        margin-top: 6.1%;
        background: linear-gradient(to bottom, var(--blue), var(--blue) 50%, var(--soft-grey) 50%);
    }

    div input {
        height: 11vh;
        width: 50%;
        border-radius: 10px 0 0 10px;
        border: none;
        padding-left: 3rem;
    }

    div input::placeholder {
        font-weight: 700;
        font-size: 15px;
    }

    div button {
        height: 11vh;
        width: 10%;
        border: 2px solid var(--white);
        background: var(--pink);
        color: var(--white);
        text-align: center;
        align-items: center;
        font-size: clamp(0.75em, 0.3em + 1vw, 2vw);
    }
`;
