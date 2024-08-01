import express from "express";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://6toos:Myworld2..@mern-estate.cm1cwbq.mongodb.net/?retryWrites=true&w=majority&appName=Mern-estate"
);

const app = express();

app.listen(3000, () => {
  console.log("Server is runnig on port 3000");
});
