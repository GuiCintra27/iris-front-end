import useAsync from "../useAsync";

import * as authApi from "../../services/authApi";

export default function useSignIn() {
    const { loading: signInLoading, error: signInError, act: signIn } = useAsync(authApi.signIn, false);

    return {
        signInLoading,
        signInError,
        signIn,
    };
}

export function useSignInGoogle() {
    const {
        loading: signInLoading,
        error: signInError,
        act: signIn
    } = useAsync(authApi.signInGoogle, false);

    return {
        signInLoading,
        signInError,
        signIn,
    };
}
