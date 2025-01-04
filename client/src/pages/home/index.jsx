import React, { useContext, useEffect } from "react";
import { GlobalContex } from "../../contex/index";
import axios from "axios";
import classes from './styles.module.css';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const { blogList, setBlogList, pendeng, setPending } =
        useContext(GlobalContex);
    const fetchListOfBlogs = async () => {
        setPending(true);
        const response = await axios.get("http://localhost:5000/api/blogs");
        const result = await response.data;

        if (result && result.blogList && result.blogList.length) {
            setBlogList(result.blogList);
            setPending(false);
        } else {
            setPending(false)
            setBlogList([])
        }
    };

    async function handleDelete(getCurrentId) {
        // console.log(getCurrentId)

        const response = await axios.delete(
            `http://localhost:5000/api/blogs/delete/${getCurrentId}`
        );
        const result = await response.data;

        if (result?.message) {
            fetchListOfBlogs();
            // navigate(0)
        }
    }
    async function handleEdit(getCurrentItem) {
        // console.log(getCurrentItem);

        navigate('/addblog', { state: { getCurrentItem } })
    }

    useEffect(() => {
        fetchListOfBlogs();
    }, []);

    return (
        <div className={classes.wrapper}>
            <h1>Blog Lists</h1>
            {blogList && blogList.length ? pendeng ? (
                <h1>Loading..., please wait!!</h1>
            ) : (
                <div className={classes.blogList}>
                    {blogList.map((item) => (
                        <div key={item._id}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <FaEdit onClick={() => handleEdit(item)} size={30} />
                            <FaTrash onClick={() => handleDelete(item._id)} size={30} />
                        </div>
                    ))}
                </div>
            ) : <h3>No blogs!!</h3>}
        </div>
    );
}
