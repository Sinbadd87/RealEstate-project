import { Outlet, Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import useIsAuth from "../../features/auth/isAuth";
// import { BsBuildings } from "react-icons/bs";
// <BsBuildings />

import "./navigation.scss";

const Navigation = () => {
  const isAuth = useIsAuth();
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
          {isAuth ? (
            <Link
              to="http://localhost:8000/auth/logout"
              className="navigationLinkItem"
            >
              <button className="btnSingIn">Logout</button>
              <FiUser className="iSignIn" />
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
