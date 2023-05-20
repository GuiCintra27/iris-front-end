import { useContext } from "react";
import Footer from "../../components/footer/footer";
import FormContainer from "../../components/formulary";
import Header from "../../components/header/header";
import UserContext from "../../contexts/UserContext";
import useSaveVolunteer from "../../hooks/api/useSaveVolunteer";
import { useForm } from "../../hooks/useForm";
import FormValidations from "./formValidations";
import Swal from "sweetalert2";
import Input from "../../components/formulary/input";
import RadioInput from "../../components/formulary/radioOptions";
import Buttons from "../../components/formulary/buttons";
import TextArea from "../../components/formulary/textArea";
import Select from "../../components/formulary/select";
import useVolunteer from "../../hooks/api/useVolunteer";
import styled from "styled-components";

export default function VolunteerForm({ page }) {
    const { userData } = useContext(UserContext);
    const { volunteer, volunteerLoading } = useSaveVolunteer();
    const { volunteerData, volunteerDataLoading } = useVolunteer();

    const { handleSubmit, handleChange, data, setData, errors, setErrors } = useForm({
        validations: FormValidations,

        onSubmit: async (data) => {
            const newData = {
                linkedIn: data.linkedIn,
                occupation: data.occupation,
                irisParticipant: data.irisParticipant === "Sim" ? true : false,
                skinColorId: data.skinColorId,
                officeId: data.officeId,
                applyingReason: data.applyingReason,
                experience: data.experience,
            };

            !data.linkedIn && delete newData.linkedIn;
            !data.experience && delete newData.experience;

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

            if (!userData?.token) return err("O usuário precisa estar conectado para se voluntariar");

            try {
                await volunteer(newData, userData?.token);
                setData({
                    linkedIn: "",
                    occupation: "",
                    irisParticipant: "",
                    skinColorId: "",
                    officeId: "",
                    applyingReason: "",
                    experience: "",
                });

                Toast.fire({
                    icon: "success",
                    title: "Informação enviada",
                    customClass: "sweet-toast",
                });
            } catch (err) {
                Toast.fire({
                    icon: "error",
                    title: "Houve um problema ao registrar voluntário",
                    customClass: "sweet-toast",
                });
            }
        },

        initialValues: {
            linkedIn: "",
            occupation: "",
            irisParticipant: "",
            skinColorId: undefined,
            officeId: undefined,
            applyingReason: "",
            experience: "",
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
                        label={"LinkedIn (Não obrigatório)"}
                        type={"text"}
                        value={data?.linkedIn}
                        name={"linkedIn"}
                        onChange={handleChange("linkedIn")}
                        disabled={volunteerLoading}
                    />

                    <Input
                        label={"Ocupação"}
                        type={"text"}
                        value={data?.occupation}
                        name={"occupation"}
                        onChange={handleChange("occupation")}
                        disabled={volunteerLoading}
                    />

                    <h4 className="options-title">Você fez parte da Comunidade Íris?</h4>
                    <div className="options">
                        <RadioInput
                            label={"Sim"}
                            name={"irisParticipant"}
                            value={"Sim"}
                            onChange={handleChange("irisParticipant")}
                            disabled={volunteerLoading}
                        />
                        <RadioInput
                            label={"Não"}
                            name={"irisParticipant"}
                            value={"Não"}
                            onChange={handleChange("irisParticipant")}
                            disabled={volunteerLoading}
                        />
                    </div>

                    <Select
                        label={"Para qual cargo você gostaria de ser considerado?"}
                        name={"officeId"}
                        value={data?.officeId}
                        options={volunteerData?.offices || []}
                        onChange={handleChange("officeId")}
                        disabled={volunteerLoading}
                    />

                    <h4 className="options-title">Como você se identifica?</h4>
                    <div className="options">
                        {volunteerData?.skinColors.map((item, key) => (
                            <RadioInput
                                label={item.name}
                                name={"skinColorId"}
                                value={item.id}
                                onChange={handleChange("skinColorId")}
                                key={key}
                                disabled={volunteerLoading}
                            />
                        ))}
                    </div>

                    <TextArea
                        label={"Por que você gostaria de fazer parte da Iniciativa Íris (100-200 caracteres)"}
                        name={"applyingReason"}
                        value={data?.applyingReason}
                        onChange={handleChange("applyingReason")}
                        minLength={100}
                        maxLength={200}
                        disabled={volunteerLoading}
                    />

                    <TextArea
                        label={"Você já tem experiência na função almejada? Se sim, compartilhe!"}
                        name={"experience"}
                        value={data?.experience}
                        onChange={handleChange("experience")}
                        maxLength={1500}
                        disabled={volunteerLoading}
                    />

                    <h4 className="options-title">
                        Eu permito que a Iniciativa Íris utilize os dados fornecidos para entrar em contato comigo e
                        conduzir o Processo Seletivo! E garanto que todas as informações disponibilizadas aqui, por mim,
                        são verdadeiras!
                    </h4>
                    <div className="options">
                        <RadioInput
                            label={"Sim"}
                            name={"authorization"}
                            value={"Sim"}
                            onChange={handleChange("authorization")}
                            disabled={volunteerLoading}
                        />

                        <RadioInput
                            label={"Não"}
                            name={"authorization"}
                            value={"Não"}
                            onChange={handleChange("authorization")}
                            disabled={volunteerLoading}
                        />
                    </div>

                    <Buttons disabled={volunteerLoading || volunteerDataLoading} />
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
