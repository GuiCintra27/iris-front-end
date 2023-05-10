import { useState, useEffect } from "react";

export default function usePostsAsync(handler, immediate = true) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState(null);

    //eslint-disable-next-line
    const act = async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const data = await handler(...args);
            setLoading(false);
            return data;
        } catch (err) {
            setError(error);
            setLoading(false);
            throw err;
        }
    };
    //eslint-disable-next-line
    useEffect(async () => {
        if (immediate) {
            const newData = await act();
            setData(newData);
        }
    }, []);

    return {
        data,
        setData,
        loading,
        error,
        act,
    };
}
