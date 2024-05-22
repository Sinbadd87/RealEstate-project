import "./auth.scss";
import SignUpForm from "../../components/signupForm/SignupForm.jsx";
import SignInForm from "../../components/signinForm/SigninForm.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  if (currentUser) {
    return navigate(-1, { replace: true });
  }
  return (
    <div className="authenticationContainer">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
