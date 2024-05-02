import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String },
  reservedApartment: { type: Schema.Types.ObjectId, ref: "Apartment" },
});
UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  errorMessages: {
    MissingPasswordError: "No password was given",
    IncorrectPasswordError: "Password or username are incorrect",
    IncorrectUsernameError: "Password or username are incorrect",
    MissingUsernameError: "No username was given",
    UserExistsError: "A user with the given username is already registered",
  },
});

const User = model("User", UserSchema);
export default User;
