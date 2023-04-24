import useAsync from "../useAsync";

import * as postsApi from "../../services/postsApi";

export default function usePosts() {
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
