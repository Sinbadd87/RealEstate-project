import { Outlet, Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import "./navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../../features/auth/authSlice";
import { useLazyLogoutQuery } from "../../api/authApiSlice";
// import { useGetAuthUserQuery } from "../../api/projectApiSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [trigger] = useLazyLogoutQuery();
  //   const { data } = useGetAuthUserQuery();
  const currentUser = useSelector(selectCurrentUser);
  //   const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await trigger().unwrap();
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentUser);
  return (
    <>
      <div className="navigationContainer">
        <Link to="/" className="logoContainer">
          LESTATE
        </Link>
        <div className="navigationLinks">
          <Link to="/" className="navigationLinkItem">
            Home
          </Link>
          <Link to="/projects" className="navigationLinkItem">
            Projects
          </Link>
          <Link to="/contacts" className="navigationLinkItem">
            Contacts
          </Link>
        </div>
        <div className="navigationLinksSignIn">
          <h4 className="navigationLinkItem">050 000-00-00</h4>
          {currentUser ? (
            <button className="btnSingIn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/auth" className="navigationLinkItem">
              <button className="btnSingIn">Sign in</button>
              <FiUser className="iSignIn" />
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
