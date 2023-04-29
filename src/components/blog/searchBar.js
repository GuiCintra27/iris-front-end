import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "styled-components";
import SearchIcon from "../../assets/Icons/search-icon.svg";

export default function CustomSearchBar(props) {
    const items = [
        {
            id: 0,
            name: "Cobol",
        },
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "Basic",
        },
        {
            id: 3,
            name: "PHP",
        },
        {
            id: 4,
            name: "Java",
        },
    ];

    return (
        <SearchBarContainer>
            <CustomStyledSearchBar
                items={items}
                // onSearch={handleOnSearch}
                // onHover={handleOnHover}
                // onSelect={handleOnSelect}
                // onFocus={handleOnFocus}
                // autoFocus
                // formatResult={formatResult}
            />
            <SearchIconContainer>
                <img src={SearchIcon} alt="" />
            </SearchIconContainer>
        </SearchBarContainer>
    );
}

const SearchBarContainer = styled("div")`
    display: flex;
    width: 50%;
    height: 46px;
    margin: auto;
    position: relative;
    margin-top: 50px;
`;

const CustomStyledSearchBar = styled(ReactSearchAutocomplete)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .wrapper {
        background-color: var(--blue);
        border: 0;
    }

    .wrapper:has(div:nth-child(2)){
        border-radius: 50px 10px 50px 50px;
    }

    .wrapper > div:first-child {
        background-color: white;
        box-sizing: border-box;
        border-radius: 50px 0 0 50px;
        border: 2px solid var(--blue);
        width: calc(100% - 70px);
        z-index: 2;
    }
    .wrapper > div:nth-child(2) {
        background-color: white;
        border-radius: 0 0 15px 15px;
    }
    .wrapper > div:first-child:has(+ div) {
        background-color: white;
        border-radius: 15px 15px 0 0;
    }
`;

const SearchIconContainer = styled("div")`
    position: absolute;
    right: 0;
    width: 70px;
    height: 96%;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    img{
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
`;
