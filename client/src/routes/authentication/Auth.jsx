import "./auth.scss";
import SignUpForm from "../../components/SignupForm/SignupForm";
import SignInForm from "../../components/SigninForm/SigninForm";

const Auth = () => {
  return (
    <div className="authenticationContainer">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
