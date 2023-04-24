import useAsync from "../useAsync";

import * as donateApi from "../../services/donateApi";

export default function useDonate() {
    const {
        act: donate,
        loading: donateLoading,
        error: donateError,
    } = useAsync(donateApi.sendDonateInformations, false);

    return {
        donate,
        donateLoading,
        donateError,
    };
}
