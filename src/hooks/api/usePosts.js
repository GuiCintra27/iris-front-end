import useAsync from "../useAsync";
import usePostsAsync from "../usePostsAsync";
import * as postsApi from "../../services/postsApi";

export function usePosts() {
    const { data: posts, loading: postsLoading, error: postsError } = useAsync(postsApi.getPosts, true);

    return {
        posts,
        postsLoading,
        postsError,
    };
}

export function useFilteredPosts() {
    const {
        data: posts,
        loading: postsLoading,
        error: postsError,
        act: postsAct,
        setData: setPosts,
    } = usePostsAsync(postsApi.getFilteredPosts, false);

    return {
        posts,
        postsLoading,
        postsError,
        postsAct,
        setPosts,
    };
}
