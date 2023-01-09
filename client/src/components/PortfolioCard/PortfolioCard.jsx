import "./PortfolioCard.scss";
import { AiOutlineEye } from "react-icons/ai";
import { FiCode } from "react-icons/fi";

const PortfolioCard = ({ title, codeLink, demoLink, image }) => {
  return (
    <div className="portfolioCard">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>
          <a href={demoLink}>
            <AiOutlineEye /> Live Demo
          </a>
          <a href={codeLink}>
            <FiCode /> Source Code
          </a>
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;
