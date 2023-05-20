import { useEffect, useState } from "react";
import styled from "styled-components";
import TopicsFilter from "../../components/blog/topicsFilter";
import DataFilter from "../../components/blog/createdAtFilter";
import Header from "../../components/header/header";
import Post from "./post";
import dayjs from "dayjs";
import { useQueryParam, ArrayParam, withDefault } from "use-query-params";
import CustomSearchBar from "../../components/blog/searchBar";
import UIInfiniteScroll from "../../components/blog/infiniteScroller";
import { useFilteredPosts } from "../../hooks/api/usePosts";
import { ColorRing } from "react-loader-spinner";
import filterImg from "../../assets/Icons/filters.png";
import { Tooltip, tooltipClasses } from "@mui/material";

const Filters = withDefault(ArrayParam, []);

export default function Blog({ page }) {
    const [filteredArray, setFilteredArray] = useQueryParam("filter", Filters);
    const [inputFilterValue, setInputFilterValue] = useQueryParam("search", String);
    const [status, setStatus] = useState(true);
    const [pageCount, setPageCount] = useState(1);
    const [throttle, setThrottle] = useState(true);
    const { posts, postsAct, postsLoading, setPosts } = useFilteredPosts();
    const [showFilters, setShowFilters] = useState(false);
    const [orderPost, setOrderPost] = useState([]);
    const orderValue = !orderPost[0] ? "desc" : orderPost[0];

    //eslint-disable-next-line
    useEffect(async () => {
        const filteredArray = parseFilteredArray();
        const responsePosts = await postsAct(filteredArray, orderValue, inputFilterValue);
        setPosts(responsePosts);
        setPageCount(1);

        if (filteredArray.length > 0) {
            setShowFilters(true);
        }
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

    const FilterTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                color: "white",
                fontSize: 13,
            },
        }),
    );

    return (
        <>
            <Header page={page} />

            <InputArea>
                <CustomSearchBar
                    setInputFilterValue={setInputFilterValue}
                    topicFilter={filteredArray}
                    inputFilterValue={inputFilterValue}
                />

                <FilterTooltip title={showFilters ? "Fechar filtros de pesquisa" : "Mostrar filtros de pesquisa"} arrow>
                    <img
                        onClick={() => {
                            if (!showFilters) setShowFilters(true);
                            if (showFilters) setShowFilters(false);
                        }}
                        className="filterImg"
                        src={filterImg}
                        alt="Filtro dos posts"
                    />
                </FilterTooltip>
            </InputArea>

            <FilterArea showFilters={showFilters}>
                <DataFilter
                    showFilters={showFilters}
                    orderPost={orderPost}
                    setOrderPost={setOrderPost}
                    setStatus={setStatus}
                />
                <TopicsFilter
                    showFilters={showFilters}
                    filteredArray={filteredArray}
                    setFilteredArray={setFilteredArray}
                    setStatus={setStatus}
                />
            </FilterArea>

            {(!posts || postsLoading) && (
                <LoadContainer>
                    <ColorRing
                        visible={true}
                        height="150"
                        width="150"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]}
                    />
                </LoadContainer>
            )}

            {(posts && !postsLoading) && (
                <PostScrollerWrapper>
                    {posts.length !== 0 ? (
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
                                    postId={item.id}
                                    status={status}
                                    topicId={item.topics.id}
                                    setFilteredArray={setFilteredArray}
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
                                    colors={["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]}
                                />
                            ) : (
                                throttle && <UIInfiniteScroll fetchMore={() => handleInfiniteScroll()} />
                            )}
                        </>
                    ) : (
                        <AlertSpan>Nenhum post foi encontrado segundo esta filtragem!</AlertSpan>
                    )}
                </PostScrollerWrapper>
            )}
            <MarginBottom />
        </>
    );
}

//Styled Component
const AlertSpan = styled.span`
    margin-top: 60px;
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

const LoadContainer = styled.div`
    width: 100%;
    height: 50vh;
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PostScrollerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FilterArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    width: 58.26%;
    min-height: ${(props) => (props.showFilters ? "190px" : "0px")};
    height: ${(props) => (props.showFilters ? "fit-content" : "0px")};
    margin: 0px auto;
    margin-top: ${(props) => (props.showFilters ? "30px" : "10px")};
    overflow: hidden;
    transition: 1.7s ease-out;
`;

const InputArea = styled.div`
    margin-top: 50px;
    gap: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .filterImg {
        height: 40px;
        width: 40px;
        cursor: pointer;
    }
`;
