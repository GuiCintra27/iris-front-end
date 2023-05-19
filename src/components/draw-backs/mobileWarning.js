import { useEffect } from "react";
import Swal from "sweetalert2";
import "./styles.css";

export default function HandleMobileWarning() {
    useEffect(() => {
        const sessionStorage = window.sessionStorage.getItem("mobile-warning");
        if (!sessionStorage) {
            Swal.fire({
                title: "We're in development",
                icon: "question",
                text: "Esta é uma versão em desenvolvimento do site. Para uma melhor qualidade de navegação, recomendamos o acesso a partir de um computador",
                heightAuto: true,
                customClass: "mobile-alert",
            });
            window.sessionStorage.setItem("mobile-warning", true);
        }
    }, []);
    return <></>;
}
