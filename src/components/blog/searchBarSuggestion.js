import SearchIcon from "../../assets/Icons/search-icon-gray.svg";
import RecentIcon from "../../assets/Icons/recent-icon-gray.svg";
import styled from "styled-components";

export default function SearchBarSuggestion({ suggestionObject }) {
    const { title, type } = suggestionObject;
    console.log(suggestionObject);
    return (
        <StyledSuggestion>
            <img src={type === "recent" ? RecentIcon : SearchIcon} alt="icon" />
            <p>{title}</p>
        </StyledSuggestion>
    );
}

const StyledSuggestion = styled.div`
    display: flex;
    color: #7c7c7c;
    align-items: center;
    width: 100%;
    height: 38px;
    margin-left: -10px;

    img {
        margin-inline: 16px;
        color: #7c7c7c;
        width: 14px;
        aspect-ratio: 1 / 1;
        z-index: 3;
    }
    p {
        color: black;
    }
`;
