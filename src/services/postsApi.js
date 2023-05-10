import api from "./api";

export async function getPost(postId) {
    const response = await api.get(`/posts/${postId}`);

    return response.data;
}

export async function getLikes(postId) {
    const response = await api.get(`/posts/likes/${postId}`);

    return response.data;
}

export async function getFilteredPosts(filteredArray) {
    const body = {
        filterIds: {
            topicId: filteredArray
        }
    };

    try {
        const response = await api.post("/posts/filter", body, {});
    
        return response.data;
    } catch (error) {
        return [];
    }
}
