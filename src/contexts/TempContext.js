import { createContext, useState } from "react";

const TempContext = createContext();
export default TempContext;

export function TempProvider({ children }) {
    const [tempData, setTempData] = useState({});

    return <TempContext.Provider value={{ tempData, setTempData }}>{children}</TempContext.Provider>;
}
