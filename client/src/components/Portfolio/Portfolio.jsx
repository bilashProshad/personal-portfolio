import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import { projects } from "../../data";
import SectionHeader from "../SectionHeader/SectionHeader";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
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
              image={project.image}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
