import "./Skills.scss";
import RoundedIconHolder from "../RoundedIconHolder/RoundedIconHolder";
import { skillIcons } from "../../data";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="top">
          <h2>Skills</h2>
          <p>
            I am proficient in the following programming languages and
            technologies:
          </p>
        </div>
        <div className="body">
          {skillIcons.map((icon) => (
            <RoundedIconHolder
              logo={icon.url}
              tooltip={icon.name}
              key={icon.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
