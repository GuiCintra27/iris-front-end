import api from "./api";

export async function getPost(postId) {
    if (postId === undefined) {
        return {
            text: "undefined",
            title: "undefined",
        };
    }

    const response = await api.get(`/posts/${postId}`);

    return response.data;
}

export async function getLikes(postId) {
    if (postId === undefined) {
        return [];
    }

    const response = await api.get(`/posts/likes/${postId}`);

    return response.data;
}

export async function getFilteredPosts(filteredArray, orderValue, inputFilterValue, config = {}) {
    const body = {
        topicFilterIds: {
            topicId: filteredArray,
        },
        postOrder: {
            id: orderValue,
        },
        inputFilterValue: inputFilterValue || "",
    };

    try {
        const response = await api.post("/posts/filter", body, config);

        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getSuggestedPosts(filteredArray, inputFilterValue, config = {}) {
    const body = {
        topicFilterIds: {
            topicId: filteredArray,
        },
        inputFilterValue,
    };

    try {
        const response = await api.post("/posts/search", body, config);

        return response.data;
    } catch (error) {
        return [];
    }
}
export async function postRecentlyVisited(inputValue, config) {
    const body = {
        inputValue,
    };

    try {
        const response = await api.put("/posts/recent", body, config);

        return response.data;
    } catch (error) {
        return error;
    }
}

// Comments ==

export async function getPostComments(postId) {
    const response = await api.get(`/posts/comments/${postId}`);
    return response.data;
}

export async function createPostComment(postId, text) {
    const body = { postId, text };
    if (localStorage.getItem("userData") !== "undefined") {
        const { token } = JSON.parse(localStorage.getItem("userData"));
        const headers = { Authorization: `Bearer ${token}` };

        const response = await api.post("/posts/comments", body, { headers });
        return response.data;
    } else {
        throw Error("Unauthorized");
    }
}

export async function deletePostComment(commentId) {
    const { token } = JSON.parse(localStorage.getItem("userData"));
    const headers = { Authorization: `Bearer ${token}` };

    try {
        const response = await api.delete("/posts/comments/" + commentId, { headers });
        return response.data;
    } catch (error) {
        return error;
    }
}
