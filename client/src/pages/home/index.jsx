import React, { useContext, useEffect } from "react";
import { GlobalContex } from "../../contex/index";
import axios from "axios";

export default function Home() {
    const { blogList, setBlogList, pendeng, setPending } =
        useContext(GlobalContex);
    const fetchListOfBlogs = async () => {
        setPending(true);
        const response = await axios.get("http://localhost:5000/api/blogs");
        const result = await response.data;

        if (result && result.blogList && result.blogList.length) {
            setBlogList(result.blogList);
            setPending(false);
        }
    };

    useEffect(() => {
        fetchListOfBlogs();
    }, []);

    return (
        <div>
            <h1>Blog Lists</h1>
            {pendeng ? (
                <h1>Loading..., please wait!!</h1>
            ) : (
                <div>
                    {blogList.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
