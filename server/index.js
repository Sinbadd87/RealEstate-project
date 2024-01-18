import express from "express";

const app = express();

app.listen(5173, () => {
  console.log("Server is running port 5173");
});

app.get("/", (req, res) => {});
