import React from "react";
import classes from "./styles.module.css";

export default function AddNewBlog() {
    return (
        <div className={classes.wrapper}>
            <h1>Add a blog</h1>
            <div className={classes.formWrapper}>
                <input
                    name="title"
                    placeholder="Enter Blog Title"
                    id="title"
                    type="text"
                />
                <textarea name="description" placeholder="Enter Blog Description" id="description" />
                <button>Add New Blog</button>
            </div>
        </div>
    );
}
