import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Swal from "sweetalert2";
import LogoImg from "../../assets/Icons/logo.svg";
import Pages from "./pages";

export default function Header({ page }) {
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const pages = ["/", "/about-us", "/blog", "/volunteers", "/donate"];

    function logOut() {
        setUserData(undefined);
        navigate("/");
        Swal.fire({
            icon: "success",
            title: "Usuário deslogado com sucesso",
            showConfirmButton: false,
            timer: 2500,
        });
    }

    return (
        <PageHeader>
            <div>
                <Link to={"/"}>
                    <img src={LogoImg} alt="logo iniciativa íris" />
                </Link>
                <Link to={"/"} id="Project-name">
                    Iniciativa Íris
                </Link>
            </div>
            <Nav>
                <Menu id="Menu">
                    {pages.map((item, index) => (
                        <Pages key={index} onPage={page} page={item} index={index} />
                    ))}

                    {userData?.token ? (
                        <div id="Login">
                            <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>
                        </div>
                    ) : (
                        <div id="Login">
                            <Link to={"/sign-in"}>
                                <ion-icon name="log-in-outline"></ion-icon>
                            </Link>
                        </div>
                    )}

                </Menu>
            </Nav>
        </PageHeader>
    );
}

const PageHeader = styled.header`
    height: 13vh;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

    div {
        display: flex;
        align-items: center;
    }

    & > div {
        margin-left: 2vw;
        gap: 0.75vw;
    }

    & > div img {
        height: 56px;
        width: clamp(5vw, 8vw, 12vw);
    }

    #Project-name {
        color: var(--black);
        font-size: clamp(0.6em, 0.3em + 2vw, 4vw);
        font-family: "Poppins";
        font-weight: 700;
    }
`;

const Nav = styled.nav`
    margin-right: 2.5vw;
    display: flex;
    align-items: center;
    list-style: none;

    #Menu-Mobile {
        display: none;
    }

    #Login {
        margin-top: 0.5rem;
        width: 5rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 42px;
    }

    & a {
        color: var(--black);
        padding-inline: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border: 3px solid transparent;
        border-radius: 40px;
    }

    #Login ion-icon {
        font-size: 3vw;
        margin-bottom: 0.5rem;
        margin-left: 1rem;
    }

    #Menu a:hover {
        border: 3px solid var(--pink);
        transition: 0.5s;
    }

    
    #Login a {
        height: 60px;
        display: flex;
        margin-top: 0.25rem;
        align-items: center;
        justify-content: center;
        border: none;
    }

    #Login a:hover{
        border: none;
    }

`;

const Menu = styled.div`
    font-size: clamp(0.6em, 0.3em + 1vw, 2.5vw);
    font-weight: 600;
    gap: 0.8vw;
    align-items: center;
    margin-right: 3vw;

    #On-Page {
        border: 3px solid var(--pink);
    }
`;
