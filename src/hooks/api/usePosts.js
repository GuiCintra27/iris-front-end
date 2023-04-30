import useAsync from "../useAsync";

import * as postsApi from "../../services/postsApi";

export function usePosts() {
    const {
        data: posts,
        loading: postsLoading,
        error: postsError,
    } = useAsync(postsApi.getPosts, true);

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
        act: postsAct
    } = useAsync(postsApi.getFilteredPosts, true);

    return {
        posts,
        postsLoading,
        postsError,
        postsAct
    };
}
