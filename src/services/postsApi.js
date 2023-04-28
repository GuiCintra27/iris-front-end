import api from "./api";

export async function getPosts() {
    const response = await api.get("/posts");

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
