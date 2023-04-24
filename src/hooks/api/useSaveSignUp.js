import useAsync from "../useAsync";

import * as userApi from "../../services/userApi";

export default function useSaveSignUp() {
    const {
        loading: signUpLoading,
        error: signUpError,
        act: signUp,
    } = useAsync((body) => userApi.signUp(body), false);

    return {
        signUpLoading,
        signUpError,
        signUp,
    };
}
