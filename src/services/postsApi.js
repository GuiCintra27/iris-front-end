import useToken from "../hooks/useToken";
import api from "./api";

export async function getPost(postId) {
    if (postId === undefined) {
        return {
            text: "undefined",
            title: "undefined"
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

export async function getFilteredPosts(filteredArray, inputFilterValue, config = {}) {
    const body = {
        topicFilterIds: {
            topicId: filteredArray,
        },
        inputFilterValue,
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
        topicFilterIdsArray: filteredArray,
        inputFilterValue,
    };
    
    try {
        const response = await api.post("/search", body, config);

        return response.data;
    } catch (error) {
        return [];
    }
}
