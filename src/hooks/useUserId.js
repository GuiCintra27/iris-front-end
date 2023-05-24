import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function useUserId() {
    const { userData: { user } } = useContext(UserContext);

    return user?.id;
}
