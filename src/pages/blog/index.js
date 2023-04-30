import { useEffect, useState } from "react";
import styled from "styled-components";
import TopicsFilter from "../../components/blogFilter/topicsFilter";
import Header from "../../components/header/header";
import { useFilteredPosts } from "../../hooks/api/usePosts";
import Post from "./post";

export default function Blog({ page }) {
    const [filteredArray, setFilteredArray] = useState([]);
    const [status, setStatus] = useState(true);
    const { postsAct, posts } = useFilteredPosts();

    useEffect(() => {
        postsAct(filteredArray);
    }, [status]);

    return (
        <>
            <Header page={page} />

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

            <MarginBottom />
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

const MarginBottom = styled.div`
    margin-bottom: 75px;
`;
