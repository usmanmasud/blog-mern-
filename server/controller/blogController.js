const mongoose = require("mongoose");
const Blog = require("../model/blog");

// fetch blogs

const fetchListOfBlogs = async (req, res) => {
  let blogList;

  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }

  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogList });
};

// add a new blog

const addNewBlock = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newCreatedBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newCreatedBlog.save();
  } catch (error) {
    console.log(error);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newCreatedBlog.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }

  return res.status(200).json({ newCreatedBlog });
};

// delete a blog

const deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);

    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Unable to delete" });
  }
};

// update a blog

const updateBlog = async (req, res) => {
  id = req.params.id;

  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Something went wrong" });
  }

  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "unable to update" });
  }

  return res.status(200).json({ currentBlogToUpdate });
};

module.exports = { fetchListOfBlogs, deleteBlog, updateBlog, addNewBlock };
