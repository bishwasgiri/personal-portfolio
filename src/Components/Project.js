import firstPhoto from "../Images/portfolio.png";
import secondPhoto from "../Images/college.png";
import thirdPhoto from "../Images/project_two.jpg";

import "../CSS/projects.css";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-heading">Project</div>
      </div>
      <div className="projects">
        <div className="project-one">
          <div className="img-container">
            <img src={firstPhoto} alt="project-img" />
          </div>
          <div className="about-proj">
            <span className="tech-head">Personal Portfolio</span>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              iusto rem placeat? Placeat consequuntur, soluta ad modi nulla
              optio aut architecto similique exercitationem eveniet nostrum
              officia ipsa voluptatibus dolorum accusantium?
            </p>
            <div className="tech-used">
              <p className="technologies">HTML</p>
              <p className="technologies">CSS</p>
              <p className="technologies">React</p>
            </div>
            <div className="message">Under Development</div>
          </div>
        </div>
        <div className="project-two">
          <div className="about-proj">
            <span className="tech-head">College Website</span>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              iusto rem placeat? Placeat consequuntur, soluta ad modi nulla
              optio aut architecto similique exercitationem eveniet nostrum
              officia ipsa voluptatibus dolorum accusantium?
            </p>
            <div className="tech-used">
              <p className="technologies">React</p>
              <p className="technologies">MongoDb</p>
              <p className="technologies">Node JS</p>
            </div>
            <div className="message">Under Development</div>
          </div>
          <div className="img-container">
            <img src={secondPhoto} alt="project-img" />
          </div>
        </div>
        <div className="project-three">
          <div className="img-container">
            <img src={thirdPhoto} alt="project-img" />
          </div>
          <div className="about-proj">
            <span className="tech-head">E-Commerce Website</span>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              iusto rem placeat? Placeat consequuntur, soluta ad modi nulla
              optio aut architecto similique exercitationem eveniet nostrum
              officia ipsa voluptatibus dolorum accusantium?
            </p>
            <div className="tech-used">
              <p className="technologies">React</p>
              <p className="technologies">Mongo Db</p>
              <p className="technologies">Node JS</p>
            </div>
            <div className="message">Upcoming</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
