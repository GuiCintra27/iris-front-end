import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "styled-components";
import SearchIcon from "../../assets/Icons/search-icon.svg";
import { useState, useRef } from "react";
import { useFilteredPosts } from "../../hooks/api/usePosts";
import { useNavigate } from "react-router-dom";
import { Tooltip, tooltipClasses } from "@mui/material";
import { useEffect } from "react";
import SearchBarSuggestion from "./searchBarSuggestion";
import GraySearchIcon from "../../assets/Icons/search-icon-gray.svg";

export default function CustomSearchBar({ setInputFilterValue, topicFilter, inputFilterValue }) {
    const { postsAct } = useFilteredPosts();
    const [itemsSuggestions, setItemsSuggestions] = useState([]);
    const inputElementRef = useRef();
    const navigate = useNavigate();
    const MAX_RESULT = useRef(6);

    const mockedSuggestions = [
        { id: 1, title: "Como fazer um bom café", type: "recent" },
        { id: 3, title: "Como fazer um bom chá", type: "new" },
        { id: 4, title: "Como fazer um bom suco", type: "new" },
        { id: 6, title: "Como fazer um bom café preto", type: "recent" },
        { id: 7, title: "Como fazer um bom alguma coisa", type: "recent" },
        { id: 8, title: "Como fazer um bom delicinha", type: "new" },
        { id: 9, title: "Como fazer um bom sexo", type: "new" },
        {
            id: 10,
            title: "Como fazer um bom teclado",
            type: "recent",
        },
    ];

    useEffect(() => {
        const result = parseSuggestions(mockedSuggestions);
        setItemsSuggestions(result);
    }, []);

    function parseSuggestions(suggestions) {
        const parsedSuggestions = suggestions.map((suggestion) => {
            return {
                ...suggestion,
                render: <SearchBarSuggestion suggestionObject={suggestion} />,
            };
        });
        return parsedSuggestions;
    }

    function sortByType(a, b) {
        if (a.item[1].v === "recent") {
            return -1;
        } else {
            return 1;
        }
    }

    async function handleOnSearch() {
        const parsedFilteredArray = topicFilter.map((item) => Number(item));
        try {
            // const posts = await postsAct(parsedFilteredArray, inputElementRef.current.value);
            // setItemsSuggestions(posts);
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
                fuseOptions={{ keys: ["title", "type"], sortFn: sortByType }}
                inputSearchString={inputFilterValue}
                onSelect={handleOnSelect}
                resultStringKeyName="render"
                maxResults={MAX_RESULT.current}
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
                showIcon={false}
            />
            <SearchIconContainer onClick={() => setInputFilterValue(inputElementRef.current.value)}>
                <TopicTooltip title={"Pesquisar"} arrow classes={{ popper: tooltipClasses.tooltip }}>
                    <img src={SearchIcon} alt="" />
                </TopicTooltip>
            </SearchIconContainer>
            <InputSearchIconContainer>
                <img src={GraySearchIcon} alt="" />
            </InputSearchIconContainer>
        </SearchBarContainer>
    );
}

const SearchBarContainer = styled("div")`
    display: flex;
    width: 50%;
    height: 46px;
    position: relative;
`;

const InputSearchIconContainer = styled("div")`
    position: absolute;
    left: 20px;
    top: 12px;
    width: 14px;
    height: 14px;
    z-index: 3;
`;

const CustomStyledSearchBar = styled(ReactSearchAutocomplete)`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;

    input{
        margin-left: 34px;
        font-family: 'Poppins';
        font-size: 16px;
    }

    .wrapper {
        background-color: var(--blue);
        border: 0;
    }

    .wrapper:has(div + div) {
        border-radius: 24px 15px 24px 24px;
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
    right: 10px;
    width: 60px;
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
