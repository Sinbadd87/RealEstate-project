import { Outlet, Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import "./navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../../features/auth/authSlice";
import { useLazyLogoutQuery } from "../../api/authApiSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [trigger] = useLazyLogoutQuery();

  const currentUser = useSelector(selectCurrentUser);

  const handleLogout = async () => {
    try {
      await trigger().unwrap();
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };

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
            <Link className="navigationLinkItem">
              <button className="btnSingIn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
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
