import { getStorage } from "firebase/storage";
import { app } from "../Config/fireBaseConfig";
import { ref, getDownloadURL } from "firebase/storage";
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

      // Trigger the download
      link.click();

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
          <h3 className="content-header">Introduction</h3>
          <p className="intro-content">
            I am a Full Stack Developer. Technologies I used for full stack
            development is MongoDb,Node.js and React.
          </p>
          <button onClick={handleDownload} className="btn">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
