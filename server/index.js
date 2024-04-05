import express from "express";
import mongoose from "mongoose";

const app = express();

try {
  await mongoose.connect(
    "mongodb+srv://dtishen87:Er3kXzmtCIdMrlxn@lestate.l72mndn.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Mongo DB connected");
} catch (error) {
  handleError(error);
}

app.get("/", (req, res) => {});

app.listen(5173, () => {
  console.log("Server is running port 5173");
});
