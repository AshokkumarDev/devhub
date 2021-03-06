const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//DB Config
const db = require("./config/keys").mangoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("connected to Mongoo DB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(" server running on port " + port));
