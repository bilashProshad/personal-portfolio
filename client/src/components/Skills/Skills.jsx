import "./Skills.scss";
import RoundedIconHolder from "../RoundedIconHolder/RoundedIconHolder";
import { skillIcons } from "../../data";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useSetActiveLink } from "../../hooks/useSetActiveLink";

const Skills = ({ setActiveLink }) => {
  const sectionRef = useSetActiveLink({
    setState: setActiveLink,
    activeLinkId: "skills",
  });

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="top">
          <SectionHeader
            title="Skills"
            description="I am proficient in the following programming languages and
            technologies:"
          />
        </div>
        <div className="bottom">
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
