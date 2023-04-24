import styled from "styled-components";
import googleIcon from "../../assets/Icons/google-oauth.svg";
import Swal from "sweetalert2";

export default function GoogleOauth() {
    function err(value) {
        Swal.fire({
            icon: "warning",
            title: "Indisponível",
            text: value,
        });
    }
    return (
        <Container onClick={() => err("Esta função ainda está em desenvolvimento :)")}>
            <img src={googleIcon} alt="google icon" />
            <p>Cadastrar com Google</p>
        </Container>
    );
}

const Container = styled.div`
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

    cursor: pointer;

    img {
        width: 36px;
    }
`;
