import React from "react";
import codeImage from "../images/code.png";
import terminalImage from "../images/terminal.png";
import dotsImage from "../images/dots.png";
import SkillDetails from "../skills.json";

const getImageByIconName = (iconName) => {
  if (iconName === "code.png") return codeImage;
  if (iconName === "terminal.png") return terminalImage;
  if (iconName === "dots.png") return dotsImage;
  return null;
};

const Skills = () => {
  return (
    <>
      <div className="skills-section" id="skills">
        <div className="skill-card-grp">
          {SkillDetails.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon">
                <img src={getImageByIconName(skill.icon)} alt={skill.title} />
              </div>
              <div className="skill-title">{skill.title}</div>
              {/* <div className="skill-subtitle">Skill Subtitle</div> */}
              <div className="skill-body">
                {/* <p>Tools</p> */}
                <ul className="skill-list">
                  {skill.skills.map((s, skillsIndex) => (
                    <li key={skillsIndex}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
