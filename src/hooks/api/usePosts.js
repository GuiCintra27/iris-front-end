import useAsync from "../useAsync";
import usePostsAsync from "../usePostsAsync";
import * as postsApi from "../../services/postsApi";

export function usePosts() {
    const { data: post, loading: postLoading, error: postError, act: postAct } = useAsync(postsApi.getPost, true);

    return {
        post,
        postLoading,
        postError,
        postAct,
    };
}

export function useLikes() {
    const { data: likes, loading: likesLoading, error: likesError, act: likesAct } = useAsync(postsApi.getLikes, true);

    return {
        likes,
        likesLoading,
        likesError,
        likesAct,
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

export function useSuggestedPosts() {
    const {
        data: suggestionPosts,
        loading: suggestionPostsLoading,
        error: suggestionPostsError,
        act: suggestionPostsAct,
        setData: setsuggestionPosts,
    } = usePostsAsync(postsApi.getSuggestedPosts, false);

    return {
        suggestionPosts,
        suggestionPostsLoading,
        suggestionPostsError,
        suggestionPostsAct,
        setsuggestionPosts,
    };
}

export function useRecentlyVisited() {
    const {
        data: recentlyVisited,
        loading: recentlyVisitedLoading,
        error: recentlyVisitedError,
        act: recentlyVisitedAct,
    } = useAsync(postsApi.postRecentlyVisited, false);

    return {
        recentlyVisited,
        recentlyVisitedLoading,
        recentlyVisitedError,
        recentlyVisitedAct,
    };
}
