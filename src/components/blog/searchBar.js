import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "styled-components";
import SearchIcon from "../../assets/Icons/search-icon.svg";
import { useState, useRef, useMemo } from "react";
import { useRecentlyVisited, useSuggestedPosts } from "../../hooks/api/usePosts";
import { Tooltip, tooltipClasses } from "@mui/material";
import SearchBarSuggestion from "./searchBarSuggestion";
import GraySearchIcon from "../../assets/Icons/search-icon-gray.svg";
import useToken from "../../hooks/useToken";
import { useEffect } from "react";

export default function CustomSearchBar({ setInputFilterValue, topicFilter, inputFilterValue }) {
    const { suggestionPostsAct } = useSuggestedPosts();
    const [itemsSuggestions, setItemsSuggestions] = useState([]);
    const inputElementRef = useRef();
    const MAX_RESULT = useRef(6);
    const tokenRef = useRef(useToken());
    const { recentlyVisitedAct } = useRecentlyVisited();

    const config = useMemo(() => {
        return tokenRef.current ? { headers: { Authorization: `Bearer ${tokenRef.current}` } } : {};
    }, [tokenRef.current]);

    //eslint-disable-next-line
    useEffect(async () => {
        try {
            if (tokenRef.current) {
                await recentlyVisitedAct(inputFilterValue, config);
            }
        } catch (err) {}
    }, [inputFilterValue]);

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
            const posts = await suggestionPostsAct(parsedFilteredArray, inputElementRef.current.value, config);
            const parsedPosts = parseSuggestions(posts);
            setItemsSuggestions(parsedPosts);
        } catch (err) {}
    }

    function handleOnSelect(card) {
        //handles lib bug where selecting gives [[Object object]],forcing the reload of inputString is necessary
        setInputFilterValue(card.title === inputFilterValue ? card.title + " " : card.title);
        setTimeout(() => {
            setInputFilterValue(card.title);
        }, 0);
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
    align-items: center;
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

    input {
        margin-left: 34px;
        font-family: "Poppins";
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
    aspect-ratio: 1;
    margin-right: 9px;
    min-height: 80%;
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
