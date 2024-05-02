import mongoose from "mongoose";

const { Schema, model } = mongoose;
const reserveSchema = new Schema({
  apartment: { type: Schema.Types.ObjectId, ref: "Apartment" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Reserve = model("Reserve", reserveSchema);

export default Reserve;
