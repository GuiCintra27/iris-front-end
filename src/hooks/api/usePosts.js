import useAsync from "../useAsync";

import * as postsApi from "../../services/postsApi";

export function usePosts() {
    const {
        data: post,
        loading: postLoading,
        error: postError,
        act: postAct
    } = useAsync(postsApi.getPost, true);

    return {
        post,
        postLoading,
        postError,
        postAct
    };
}

export function useLikes() {
    const {
        data: likes,
        loading: likesLoading,
        error: likesError,
        act: likesAct
    } = useAsync(postsApi.getLikes, true);

    return {
        likes,
        likesLoading,
        likesError,
        likesAct
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
