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
                </Menu>

                {userData?.token ? (
                    <div id="Login-Logout">
                        <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>
                    </div>
                ) : (
                    <div id="Login-Logout">
                        <Link to={"/sign-in"}>
                            <ion-icon name="log-in-outline"></ion-icon>
                        </Link>
                    </div>
                )}
            </Nav>
        </PageHeader>
    );
}

const PageHeader = styled.header`
    height: 11vh;
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
    display: flex;
    align-items: center;
    list-style: none;

    #Menu-Mobile {
        display: none;
    }

    & a {
        color: var(--black);
        padding-inline: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border: 3px solid transparent;
        border-radius: 40px;
    }

    #Menu {
        margin: 0;
    }

    #Menu a:hover {
        border: 3px solid var(--pink);
        transition: 0.5s;
    }

    #Login-Logout {
        margin-inline: 2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        ion-icon {
            font-size: 2.5vw;
        }
        ion-icon[name="log-out-outline"] {
            color: var(--pink);
        }
        ion-icon[name="log-in-outline"] {
            color: var(--blue);
        }
    }

    #Login-Logout a {
        height: 60px;
        display: flex;
        margin-top: 0.25rem;
        align-items: center;
        justify-content: center;
        border: none;
    }

    #Login-Logout a:hover {
        border: none;
    }
`;

const Menu = styled.div`
    font-size: clamp(0.6em, 0.25em + 1vw, 2.5vw);
    font-weight: 600;
    gap: 0.8vw;
    align-items: center;
    margin-right: 3vw;

    #On-Page {
        border: 3px solid var(--pink);
    }
`;
