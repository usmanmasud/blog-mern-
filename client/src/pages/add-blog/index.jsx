import React, { useContext, useEffect } from "react";
import classes from "./styles.module.css";
import { GlobalContex } from "../../contex";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddNewBlog() {
    const { formData, setFormData, currentEdited, setCurrentEdited } =
        useContext(GlobalContex);
    const navigation = useNavigate();
    const location = useLocation();

    console.log(formData);

    const handleSaveBlog = async () => {
        const response = currentEdited
            ? await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentItem._id}`, {
                title: formData.title,
                description: formData.description,
            })
            : await axios.post("http://localhost:5000/api/blogs/add", {
                title: formData.title,
                description: formData.description,
            });

        const results = await response.data;

        if (results) {
            setCurrentEdited(false)
            setFormData({
                title: "",
                description: "",
            });
            navigation("/");
        }
    };

    useEffect(() => {
        if (location.state) {
            const { getCurrentItem } = location.state;
            setCurrentEdited(true);
            setFormData({
                title: getCurrentItem.title,
                description: getCurrentItem.description,
            });
        }
    }, [location]);

    return (
        <div className={classes.wrapper}>
            <h1>{currentEdited ? "Edit blog" : "Add a blog"}</h1>
            <div className={classes.formWrapper}>
                <input
                    name="title"
                    placeholder="Enter Blog Title"
                    id="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <textarea
                    value={formData.description}
                    name="description"
                    placeholder="Enter Blog Description"
                    id="description"
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                />
                <button onClick={handleSaveBlog}>{currentEdited ? "edit" : "Add New Blog"}</button>
            </div>
        </div>
    );
}
