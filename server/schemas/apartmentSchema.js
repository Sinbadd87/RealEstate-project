import mongoose from "mongoose";

const { Schema, model } = mongoose;
const apartmentSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  reserved: Boolean,
  rooms: Number,
  price: Number,
  image: String,
});

const Apartment = model("Apartment", apartmentSchema);

export default Apartment;
