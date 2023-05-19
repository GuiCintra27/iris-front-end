import { useState } from "react";

export function useValue(initialValue = "") {
    const [value, setValue] = useState(initialValue);
    const updateValue = (e) => setValue(e.target.value);
    return [value, updateValue, setValue];
}
