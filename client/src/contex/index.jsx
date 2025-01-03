import { createContext, useState } from "react";

export const GlobalContex = createContext(null);

export default function GlobalState({ children }) {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })


    return <GlobalContex.Provider value={{ formData, setFormData }}>{children}</GlobalContex.Provider>
}