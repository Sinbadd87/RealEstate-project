import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import Project from "./schemas/projectSchema.js";
dotenv.config({ path: "../.env" });

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const lestateDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_API_KEY);
    console.log("Mongo DB connected");
  } catch (error) {
    console.error(error);
  }
};
lestateDB();

async function loadAllProjects() {
  return await Project.find({});
}

app.get("/projects", async (req, res) => {
  return res.status(200).json(await loadAllProjects());
});

app.listen(8000, async () => {
  await loadAllProjects();
  console.log("Server is running port 8000");
});
