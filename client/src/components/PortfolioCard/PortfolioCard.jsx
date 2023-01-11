import "./PortfolioCard.scss";
import { AiOutlineEye } from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

const PortfolioCard = ({ title, codeLink, demoLink, image }) => {
  return (
    <motion.div
      className="portfolioCard"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  );
};

export default PortfolioCard;
