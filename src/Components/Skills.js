import { SlCheck } from "react-icons/sl";
import "../CSS/skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <div className="skills-heading">Skills</div>
      </div>
      <div className="skills-content">
        <div className="skills-card">
          <h4>Frontend Technologies</h4>
          <div className="grouping">
            <div className="first-group">
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">HTML</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">CSS</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
            </div>
            <div className="second-group">
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">Javascript</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">Git</p>
                </div>
                <p className="secondary-name">Basic</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h4>Backend Technologies</h4>
          <div className="grouping">
            <div className="first-group">
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">PHP</p>
                </div>
                <p className="secondary-name">Basics</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">Node JS</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
            </div>
            <div className="second-group">
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">SQL</p>
                </div>
                <p className="secondary-name">Basics</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  <p>
                    <SlCheck />
                  </p>
                  <p className="primary-name">MongoDb</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
