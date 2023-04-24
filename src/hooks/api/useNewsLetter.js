import useAsync from "../useAsync";

import * as newsLetterApi from "../../services/newsLetterApi";

export default function useNewsLetter() {
    const {
        act: newsLetter,
        loading: newsLetterLoading,
        error: newsLetterError,
    } = useAsync((body) => newsLetterApi.subscribeOnNewsLetter(body), false);

    return {
        newsLetter,
        newsLetterLoading,
        newsLetterError,
    };
}
