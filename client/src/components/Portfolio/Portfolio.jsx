import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    codeLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    title: "Chat App",
    codeLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Social Media",
    codeLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    title: "Video Sharing",
    codeLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/images/4.jpg",
  },
  {
    id: 5,
    title: "Disney+ Clone",
    codeLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/images/5.jpg",
  },
  {
    id: 6,
    title: "Linkedin Clone",
    codeLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/images/6.jpg",
  },
];

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
