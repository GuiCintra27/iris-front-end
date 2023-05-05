import { useEffect, useState } from "react";
import styled from "styled-components";
import TopicsFilter from "../../components/blog/topicsFilter";
import Header from "../../components/header/header";
import Post from "./post";
import dayjs from "dayjs";
import { useQueryParam, ArrayParam, withDefault } from "use-query-params";
import CustomSearchBar from "../../components/blog/searchBar";
import UIInfiniteScroll from "../../components/blog/infiniteScroller";
import { useFilteredPosts } from "../../hooks/api/usePosts";
import { ColorRing } from "react-loader-spinner";

const Filters = withDefault(ArrayParam, []);

export default function Blog({ page }) {
    const [filteredArray, setFilteredArray] = useQueryParam("filter", Filters);
    const [inputFilterValue, setInputFilterValue] = useQueryParam("search", String);
    const [status, setStatus] = useState(true);
    const [pageCount, setPageCount] = useState(1);
    const [throttle, setThrottle] = useState(true);
    const { posts, postsAct, postsLoading, setPosts } = useFilteredPosts();

    //eslint-disable-next-line
    useEffect(async () => {
        const filteredArray = parseFilteredArray();
        const responsePosts = await postsAct(filteredArray, inputFilterValue);
        setPosts(responsePosts);
        setPageCount(1);
    }, [status, filteredArray, inputFilterValue]);

    useEffect(() => {
        if (throttle) return;
        const THROTTLE_TIME = 4000; //ms
        setTimeout(() => setThrottle(true), THROTTLE_TIME);
    }, [throttle]);

    function parseFilteredArray() {
        const parsedFilteredArray = filteredArray.map((item) => Number(item));
        return parsedFilteredArray;
    }

    async function handleInfiniteScroll() {
        if (!throttle) return;
        setThrottle(false);
        const requestNewPage = pageCount + 1;
        const configurateHeaders = {
            headers: {
                page: String(requestNewPage),
            },
        };
        const filteredArray = parseFilteredArray();
        setPageCount(requestNewPage);
        const newPosts = await postsAct(filteredArray, inputFilterValue, configurateHeaders);
        setPosts((posts) => [...posts, ...newPosts]);
    }

    return (
        <>
            <Header page={page} />

            <CustomSearchBar
                setInputFilterValue={setInputFilterValue}
                topicFilter={filteredArray}
                inputFilterValue={inputFilterValue}
            />

            <TopicsFilter filteredArray={filteredArray} setFilteredArray={setFilteredArray} setStatus={setStatus} />

            <PostScrollerWrapper>
                {posts && posts.length !== 0 ? (
                    <>
                        {posts.map((item, index) => (
                            <Post
                                key={index}
                                author={item.admins.name}
                                authorImg={item.admins.photo}
                                text={item.text}
                                postImg={item.image}
                                likes={item.likes}
                                title={item.title}
                                topicName={item.topics.name}
                                publishedAt={dayjs(item.created_at).format("DD/MM/YYYY")}
                            />
                        ))}
                        {postsLoading ? (
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={["#429EA6", "#429EA6", "#429EA6", "#429EA6", "#429EA6"]}
                            />
                        ) : (
                            throttle && <UIInfiniteScroll fetchMore={() => handleInfiniteScroll()} />
                        )}
                    </>
                ) : (
                    <AlertSpan>Nenhum post foi encontrado seguindo esta filtragem!</AlertSpan>
                )}
            </PostScrollerWrapper>
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

const PostScrollerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
