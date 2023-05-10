import styled from "styled-components";
import useNewsLetter from "../../hooks/api/useNewsLetter";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import FormValidations from "./newsletterFormValidations";

export default function Newsletter() {
    const { newsLetter } = useNewsLetter();

    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: FormValidations,

        //eslint-disable-next-line
        onSubmit: async (data) => {
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
    position: relative;
    background-color: var(--blue);
    text-align: center;
    width: 100%;
    color: var(--white);
    padding-top: 15rem;
    height: 493px;

    h1 {
        font-size: 450%;
        margin-bottom: 1rem;
    }

    p {
        font-size: 200%;
        font-weight: 500;
    }

    form {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    div {
        display: flex;
        width: 50%;
        min-width: 600px;
        margin: auto;
        aspect-ratio: 1143 / 118;
        justify-content: center;
        transform: translate(0, +50%);
    }

    div input {
        width: 100%;
        height: 100%;
        border-radius: 10px 0 0 10px;
        border: none;
        padding-left: 3rem;
    }

    div input::placeholder {
        font-weight: 700;
        font-size: 15px;
    }

    div button {
        width: 26%;
        border: 2px solid var(--white);
        background: var(--pink);
        color: var(--white);
        text-align: center;
        align-items: center;
        font-size: clamp(0.75em, 0.3em + 1vw, 2vw);
    }
`;
