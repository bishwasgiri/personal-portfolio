import { useState, useEffect } from "react";
import myImage from "../Images/image.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import "../CSS/heros.css";

const Hero = ({ scrollToContact }) => {
  const [percentScrolled, setPercentScrolled] = useState(0);

  const scrollToPostion = () => {
    scrollToContact();
  };

  const fillScrollLine = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolledHeight = window.scrollY;
    const newPercentScrolled =
      (scrolledHeight / (fullHeight - windowHeight)) * 100;
    setPercentScrolled(newPercentScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", fillScrollLine);
  }, []);

  useEffect(() => {
    const canvas = document.querySelector(".circle-canvas");

    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext("2d");

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 20;
      const startAngle = -Math.PI / 2; // Start the progress at the top of the circle (12 o'clock)
      const endAngle = (Math.PI * 2 * percentScrolled) / 100 + startAngle; // Calculate the end angle based on the percentage

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = 3;
      //   ctx.fillText("hello", 10, 50);
      ctx.stroke();

      // Draw the progress arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.strokeStyle = "#FF4500";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw the text showing the percentage scrolled
      ctx.fillStyle = "#000";
      ctx.font = "bold 10px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (percentScrolled > 98) {
        ctx.fillText("Top", centerX, centerY);
        canvas.addEventListener("click", (event) => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          ctx.fillText(`${Math.round(percentScrolled)}%`, centerX, centerY);
        });
      } else {
        ctx.fillText(`${Math.round(percentScrolled)}%`, centerX, centerY);
      }
    }
  }, [percentScrolled]);

  return (
    <>
      <div
        className="sticky-icons"
        style={{
          display: percentScrolled > 85 ? "none" : "block",
        }}
      >
        <div className="icons">
          <FaLinkedin size={30} style={{ margin: "20px" }} />
        </div>
        <div className="icons">
          <FaInstagram size={30} style={{ margin: "20px" }} />
        </div>
        <div className="icons">
          <FaTwitter size={30} style={{ margin: "20px" }} />
        </div>
      </div>

      <div className="hero-section">
        <div className="contents">
          <div className="hero-content">
            <div className="intro">
              <span className="primary-font">Bishwas Giri</span>
              <div className="wrap-tech">
                <span className="line"></span>

                <span className="tech-stack">Full Stack Developer(MERN)</span>
              </div>
              <p className="description">
                I am a technology enthusiast currently in nepal. I am very
                passionate and dedicated to my work.
              </p>
              <button className="primary-btn" onClick={scrollToPostion}>
                <span className="touch">Get in Touch</span>
                <CiLocationArrow1 size={25} />
              </button>
            </div>
            <div className="images">
              <img src={myImage} alt="myphoto" />
            </div>
          </div>
        </div>
        {percentScrolled > 20 ? (
          <div className="circle-container">
            <canvas className="circle-canvas"></canvas>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Hero;
