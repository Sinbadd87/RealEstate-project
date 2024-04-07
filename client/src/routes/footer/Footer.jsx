import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="leftFooter">
        <h4>Head office</h4>
        <h6>4528622, Israel, Hod HaSharon</h6>
        <h6>Ramatayim Road, 00</h6>
        <h6>Sun–Thu: 08:30–17:30</h6>
      </div>
      <div className="rightFooter">
        <div className="footerLinks">
          <Link to="/" className="footerLinkItem">
            Home
          </Link>
          <Link to="/projects" className="footerLinkItem">
            Projects
          </Link>
          <Link to="/contacts" className="footerLinkItem">
            Contacts
          </Link>
        </div>
      </div>
      <div className="socialIcons">
        <FaFacebookF className="socialIcon" />
        <FaXTwitter className="socialIcon" />
        <FaInstagram className="socialIcon" />
      </div>
    </div>
  );
};

export default Footer;
