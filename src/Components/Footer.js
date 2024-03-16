import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <div className="blog-container">
      <footer>
        <h2>Bishwas</h2>
        <div className="link-container">
          <FaInstagram size={50} style={{ margin: "30px" }} />
          <FaLinkedin size={50} style={{ margin: "30px" }} />
          <FaTwitter size={50} style={{ margin: "30px" }} />
        </div>
        <p className="copy-right">All Rights Reserved &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
