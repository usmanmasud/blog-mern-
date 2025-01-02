const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blog.route");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello Express");
});

app.listen(5000, () => console.log(`App is running at 5000...`));
