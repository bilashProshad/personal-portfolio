import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import { projects } from "../../data";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useSetActiveLink } from "../../hooks/useSetActiveLink";

const Portfolio = ({ setActiveLink }) => {
  const sectionRef = useSetActiveLink({
    setState: setActiveLink,
    activeLinkId: "portfolio",
  });

  return (
    <section className="portfolio" id="portfolio" ref={sectionRef}>
      <div className="container">
        <div className="top">
          <SectionHeader
            title="Portfolio"
            description="Here are a few examples of my recent work:"
          />
        </div>
        <div className="bottom">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
              tools={project.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
