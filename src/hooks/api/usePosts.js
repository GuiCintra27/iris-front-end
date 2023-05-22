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

// Comments ==

export function usePostComments() {
    const {
        data: postComments,
        loading: postCommentsLoading,
        error: postCommentsError,
        act: getPostComments,
    } = useAsync(postsApi.getPostComments, false);

    return {
        postComments,
        postCommentsLoading,
        postCommentsError,
        getPostComments,
    };
}

/* export function usePostComments() {
    const {
        data: postComments,
        setData: setPostComments,
        loading: postCommentsLoading,
        error: postCommentsError,
        act: getPostComments,
    } = usePostsAsync(postsApi.getPostComments, false);

    return {
        postComments,
        setPostComments,
        postCommentsLoading,
        postCommentsError,
        getPostComments,
    };
} */

export function useCreatePostComment() {
    const {
        loading: createCommentsLoading,
        error: createCommentsError,
        act: createPostComment,
    } = useAsync(postsApi.createPostComment, false);

    return {
        createCommentsLoading,
        createCommentsError,
        createPostComment,
    };
}

export function useDeletePostComment() {
    const {
        loading: deleteCommentsLoading,
        error: deleteCommentsError,
        act: deletePostComment,
    } = useAsync(postsApi.deletePostComment, false);

    return {
        deleteCommentsLoading,
        deleteCommentsError,
        deletePostComment,
    };
}
