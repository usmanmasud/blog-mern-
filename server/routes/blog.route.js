const express = require("express");
const blogRouter = express.Router();

const {
  fetchListOfBlogs,
  deleteBlog,
  updateBlog,
  addNewBlock,
} = require("../controller/blogController");

blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlock);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete", deleteBlog);

module.exports = blogRouter;
