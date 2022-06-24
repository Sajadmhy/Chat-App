import { createContext, useState } from "react";
import { Data } from "./Data";

export const Context = createContext();

export default function GlobalStates({children}) {
    const [messages, setMessages] = useState(Data);

    return (
        <>
        <Context.Provider value={[messages, setMessages]}>{children}</Context.Provider>
        </>
    )
}