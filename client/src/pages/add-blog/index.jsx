import React, { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContex } from "../../contex";

export default function AddNewBlog() {
    const { formData, setFormData } = useContext(GlobalContex);

    console.log(formData)


    const handleSaveBlog = async () => {

    }

    return (
        <div className={classes.wrapper}>
            <h1>Add a blog</h1>
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
                <button onClick={handleSaveBlog}>Add New Blog</button>
            </div>
        </div>
    );
}
