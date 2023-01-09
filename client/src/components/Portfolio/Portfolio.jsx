import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import { projects } from "../../data";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="top">
          <h2>Portfolio</h2>
          <p>Here are a few examples of my recent work:</p>
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
