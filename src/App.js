import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Element, Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import "./App.css";
import "./CSS/headers.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="name">
          <h1 className="logo">Bishwas.</h1>
        </div>
        <Element name="home">
          <div className="lists">
            <ul>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  Project
                </Link>
              </li>
            </ul>
          </div>
          <div className="hamburger">
            <div className="ham-menu">
              <RxHamburgerMenu size={40} />
            </div>
          </div>
        </Element>
      </div>
      <Hero />
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
