import React, { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContex } from "../../contex";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddNewBlog() {
    const { formData, setFormData } = useContext(GlobalContex);
    const navigation = useNavigate()

    console.log(formData)


    const handleSaveBlog = async () => {
        const response = await axios.post('http://localhost:5000/api/blogs/add', {
            title: formData.title,
            description: formData.description
        })

        const results = await response.data;

        if (results) {
            setFormData({
                title: '',
                description: ''
            })
            navigation('/')
        }

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
