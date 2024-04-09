import { getStorage } from "firebase/storage";
import { app } from "../Config/fireBaseConfig";
import { ref, getDownloadURL } from "firebase/storage";
import { GoDownload } from "react-icons/go";
import myImage from "../Images/image.jpg";

import "../CSS/about.css";
const storage = getStorage(app);

const About = () => {
  const handleDownload = async () => {
    try {
      const fileRef = ref(storage, "CV/myCv.pdf");
      const url = await getDownloadURL(fileRef);

      // Create a new tab
      const newTab = window.open(url, "_blank");
      if (newTab) {
        newTab.focus();
      }

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "myCv.pdf");
      document.body.appendChild(link);

      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      // console.log("Error downloading file", error);
    }
  };
  return (
    <div className="about">
      <div className="about-header">
        <div className="about-heading">About Me</div>
      </div>
      <div className="about-container">
        <div className="image">
          <img src={myImage} alt="my" />
        </div>
        <div className="about-contents">
          <span className="content-header">Introduction</span>
          <p className="intro-content">
            I am a Full Stack Developer who is passionate about creating robust
            web application with a solid foundation in modern technologies. I
            specialize in MongoDb,Express.js,Node.js and React
          </p>
          <button onClick={handleDownload} className="btn">
            <span className="download">Download CV</span> <GoDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
