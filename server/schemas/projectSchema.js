import mongoose from "mongoose";

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  id: String,
  name: String,
  location: String,
  geometry: [Number],
  minPrice: Number,
  maxPrice: Number,
  completionDate: Number,
  appartments: [{ rooms: Number, price: Number }],
  images: {
    preview: [
      {
        url: String,
      },
    ],
    other: [{ url: String }],
  },
});

const Project = model("Project", projectSchema);

export default Project;
