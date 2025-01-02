const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://usmanmasud260:I8CMO4YgkwV8yvvz@cluster0.ar0zw.mongodb.net/"
  )
  .then(() => console.log("connected to data base"))
  .catch((e) => console.log(e));
