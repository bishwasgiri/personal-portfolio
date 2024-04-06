import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Element, Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

import { useRef } from "react";
import "./App.css";
import "./CSS/headers.css";

function App() {
  const scrollRef = useRef(null);

  const scrollToContact = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="name">
          <span className="logo">Bishwas.</span>
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
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  Contact
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
      <Hero scrollToContact={scrollToContact} />
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
        <Contact ref={scrollRef} />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
