import useAsync from "../useAsync";

import * as topicsApi from "../../services/topicsApi";

export default function useTopics() {
    const {
        data: topicsData,
        loading: topicsLoading,
        error: topicsError,
    } = useAsync(topicsApi.getTopics, true);

    return {
        topicsData,
        topicsLoading,
        topicsError,
    };
}
