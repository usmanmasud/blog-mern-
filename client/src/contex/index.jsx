import { createContext, useState } from "react";

export const GlobalContex = createContext(null);

export default function GlobalState({ children }) {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })
    const [blogList, setBlogList] = useState([]);
    const [pendeng, setPending] = useState(false);
    const [currentEdited, setCurrentEdited] = useState(false)


    return <GlobalContex.Provider value={{ formData, currentEdited, setCurrentEdited, setFormData, blogList, setBlogList, pendeng, setPending }}>{children}</GlobalContex.Provider>
}