import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import FormInput from "../formInput/FormInput";

import "./signupForm.scss";
import { useRegisterMutation } from "../../api/authApiSlice";
import {
  setCredentials,
  selectCurrentUser,
} from "../../features/auth/authSlice";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const [register, { isSuccess, isLoading, isUninitialized }] =
    useRegisterMutation();
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const credentials = await register({
        displayName,
        email,
        password,
      }).unwrap();
      if (credentials) {
        dispatch(setCredentials(credentials));
        resetFormFields();
        navigate("/projects");
      }
    } catch (error) {
      alert("User already exist");
      resetFormFields();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const userName = useSelector(selectCurrentUser);

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form method="POST" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button
          className="btnProjectPage"
          style={{ color: "white", fontWeight: "500" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
