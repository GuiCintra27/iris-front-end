import { Link } from "react-router-dom";

export default function Pages({ onPage, page, index }) {
    const pageName = ["Início", "Sobre nós", "Blog", "Voluntários", "Doar"];
    
    return (
        <li>
            <Link to={page} id={onPage === page ? "On-Page" : null}>{pageName[index]}</Link>
        </li>
    );
}
