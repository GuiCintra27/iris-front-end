import api from "./api";

export async function getPosts() {
    const response = await api.get("/posts");

    return response.data;
}

export async function getFilteredPosts(filteredArray, inputFilterValue) {
    const body = {
        topicFilterIds: {
            topicId: filteredArray,
        },
        inputFilterValue,
    };

    try {
        const response = await api.post("/posts/filter", body, {});

        return response.data;
    } catch (error) {
        return [];
    }
}
