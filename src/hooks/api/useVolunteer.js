import useAsync from "../useAsync";

import * as volunteerApi from "../../services/volunteerApi";

export default function useVolunteer() {
    const { loading: volunteerDataLoading, error: volunteerDataError, data: volunteerData } = useAsync(volunteerApi.getVolunteerRegisterData, true);

    return {
        volunteerDataLoading,
        volunteerDataError,
        volunteerData,
    };
}
