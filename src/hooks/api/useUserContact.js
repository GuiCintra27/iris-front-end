import useAsync from "../useAsync";

import * as userContactApi from "../../services/userContactApi";

export default function useUserContact() {
    const {
        act: userContact,
        loading: userContactLoading,
        error: userContactError,
    } = useAsync(userContactApi.userContact, false);

    return {
        userContact,
        userContactLoading,
        userContactError,
    };
}
