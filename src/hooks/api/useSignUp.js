import useAsync from "../useAsync";

import * as userApi from "../../services/userApi";

export default function useSignUp() {
    const { loading: registerDataLoading, error: registerDataError, data: registerData } = useAsync(userApi.getSignUpData, true);

    return {
        registerDataLoading,
        registerDataError,
        registerData,
    };
}
