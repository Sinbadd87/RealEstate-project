import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../api/authApiSlice";
import {
  setCredentials,
  selectCurrentUser,
} from "../../features/auth/authSlice";

import FormInput from "../formInput/FormInput";

import "./signinForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const [login, { isSuccess, isLoading }] = useLoginMutation();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    try {
      const credentials = await login({
        email,
        password,
      }).unwrap();
      console.log(credentials, isLoading, isSuccess);
      dispatch(setCredentials(credentials));
      resetFormFields();
    } catch (error) {
      alert("Please try again!");
      resetFormFields();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const userName = useSelector(selectCurrentUser);
  console.log(userName, "username");

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <button
            className="btnProjectPage"
            style={{ color: "white", fontWeight: "500" }}
          >
            Sign In
          </button>
          <button
            className="btnProjectPage"
            style={{ color: "white", fontWeight: "500" }}
            onClick={(event) => {
              event.preventDefault();
              window.open(
                "/api/auth/google/callback",
                "_self",
                "toolbar=no, menubar=no, width=600, height=700, top=100, left=100"
              );
            }}
          >
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
