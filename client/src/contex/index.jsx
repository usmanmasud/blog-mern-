import { createContext } from "react";

export const GlobalContex = createContext(null);

export default function GlobalState({ children }) {


    return <GlobalContex.Provider>{children}</GlobalContex.Provider>
}