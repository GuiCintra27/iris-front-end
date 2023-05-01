import { useEffect, useState } from "react";
import styled from "styled-components";
import TopicsFilter from "../../components/blog/topicsFilter";
import Header from "../../components/header/header";
import { useFilteredPosts } from "../../hooks/api/usePosts";
import Post from "./post";
import { useQueryParam, ArrayParam, withDefault } from "use-query-params";
import CustomSearchBar from "../../components/blog/searchBar";

const Filters = withDefault(ArrayParam, []);

export default function Blog({ page }) {
    const [filteredArray, setFilteredArray] = useQueryParam("filter", Filters);
    const [inputFilterValue, setInputFilterValue] = useQueryParam("search", String);
    const [status, setStatus] = useState(true);
    const { postsAct, posts } = useFilteredPosts();

    useEffect(() => {
        const parsedFilteredArray = filteredArray.map((item) => Number(item));
        postsAct(parsedFilteredArray, inputFilterValue);
    }, [status, filteredArray, inputFilterValue]);

    return (
        <>
            <Header page={page} />

            <CustomSearchBar
                setInputFilterValue={setInputFilterValue}
                topicFilter={filteredArray}
                inputFilterValue={inputFilterValue}
            />

            <TopicsFilter filteredArray={filteredArray} setFilteredArray={setFilteredArray} setStatus={setStatus} />

            {posts?.length === 0 ? (
                <AlertSpan>Nenhum post foi encontrado seguindo esta filtragem!</AlertSpan>
            ) : (
                posts?.map((item, index) => (
                    <Post
                        key={index}
                        author={item.admins.name}
                        authorImg={item.admins.photo}
                        text={item.text}
                        postImg={item.image}
                    />
                ))
            )}
        </>
    );
}

//Styled Component
const AlertSpan = styled.span`
    margin-top: 50px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #000000;
`;
