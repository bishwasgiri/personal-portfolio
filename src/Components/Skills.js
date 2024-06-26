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
          <span className="skills-head">Frontend Technologies</span>
          <div className="grouping">
            <div className="first-group">
              <div className="front-desc">
                <div className="group-name">
                  <SlCheck />

                  <p className="primary-name">html</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  <SlCheck />

                  <p className="primary-name">css</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
            </div>
            <div className="second-group">
              <div className="front-desc">
                <div className="group-name">
                  <SlCheck />

                  <p className="primary-name">Javascript</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  <SlCheck />

                  <p className="primary-name">git</p>
                </div>
                <p className="secondary-name">Basic</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <span className="skills-head">Backend Technologies</span>
          <div className="grouping">
            <div className="first-group">
              <div className="front-desc">
                <div className="group-name">
                  {/* <p> */}
                  <SlCheck />
                  {/* </p> */}
                  <p className="primary-name">PHP</p>
                </div>
                <p className="secondary-name">Basics</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  {/* <p> */}
                  <SlCheck />
                  {/* </p> */}
                  <p className="primary-name">Node JS</p>
                </div>
                <p className="secondary-name">Intermediate</p>
              </div>
            </div>
            <div className="second-group">
              <div className="front-desc">
                <div className="group-name">
                  {/* <p> */}
                  <SlCheck />
                  {/* </p> */}
                  <p className="primary-name">SQL</p>
                </div>
                <p className="secondary-name">Basics</p>
              </div>
              <div className="front-desc">
                <div className="group-name">
                  {/* <p> */}
                  <SlCheck />
                  {/* </p> */}
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
