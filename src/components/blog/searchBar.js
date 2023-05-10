import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "styled-components";
import SearchIcon from "../../assets/Icons/search-icon.svg";
import { useState, useRef } from "react";
import { useFilteredPosts } from "../../hooks/api/usePosts";
import { useNavigate } from "react-router-dom";
import { Tooltip, tooltipClasses } from "@mui/material";

export default function CustomSearchBar({ setInputFilterValue, topicFilter, inputFilterValue }) {
    const { postsAct } = useFilteredPosts();
    const [itemsSuggestions, setItemsSuggestions] = useState([]);
    const inputElementRef = useRef();
    const navigate = useNavigate();

    async function handleOnSearch() {
        const parsedFilteredArray = topicFilter.map((item) => Number(item));
        try {
            const posts = await postsAct(parsedFilteredArray, inputElementRef.current.value);
            setItemsSuggestions(posts);
        } catch (err) {}
    }

    function handleOnSelect(card) {
        setInputFilterValue(inputElementRef.current.value);
        navigate(`${card.id}`);
    }

    return (
        <SearchBarContainer>
            <CustomStyledSearchBar
                items={itemsSuggestions}
                onSearch={handleOnSearch}
                fuseOptions={{ keys: ["title"] }}
                inputSearchString={inputFilterValue}
                onSelect={handleOnSelect}
                resultStringKeyName="title"
                onClear={() => {
                    setInputFilterValue("");
                    setItemsSuggestions([]);
                }}
                onFocus={(e) => {
                    inputElementRef.current = e.target;
                    e.target.onkeydown = (e) => {
                        if (e.key === "Enter") {
                            setInputFilterValue(inputElementRef.current.value);
                        }
                        if (e.key === "Escape") {
                            inputElementRef.current.blur();
                        }
                    };
                }}
                styling={{
                    zIndex: 2,
                }}
            />
            <SearchIconContainer onClick={() => setInputFilterValue(inputElementRef.current.value)}>
                <TopicTooltip title={"Pesquisar"} arrow classes={{ popper: tooltipClasses.tooltip }}>
                    <img src={SearchIcon} alt="" />
                </TopicTooltip>
            </SearchIconContainer>
        </SearchBarContainer>
    );
}

const SearchBarContainer = styled("div")`
    display: flex;
    width: 50%;
    height: 46px;
    position: relative;
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

    .wrapper:has(div:nth-child(2)) {
        border-radius: 50px 10px 50px 50px;
    }

    .wrapper li:has([Title]) {
        cursor: pointer;
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

const SearchIconContainer = styled("button")`
    position: absolute;
    right: 0;
    width: 70px;
    height: 96%;
    z-index: 3;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
`;
const TopicTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
    () => ({
        [`& .${tooltipClasses.tooltip}`]: {
            color: "white",
            fontSize: 13,
        },
    }),
);
