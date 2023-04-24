import useAsync from "../useAsync";

import * as volunteerApi from "../../services/volunteerApi";

export default function useSaveVolunteer() {
    const {
        act: volunteer,
        loading: volunteerLoading,
        error: volunteerError,
    } = useAsync(volunteerApi.registerVolunteer, false);

    return {
        volunteer,
        volunteerLoading,
        volunteerError,
    };
}
