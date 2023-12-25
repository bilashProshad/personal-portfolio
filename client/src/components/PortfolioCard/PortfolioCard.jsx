import "./PortfolioCard.scss";
import { FaGithub, FaChrome } from "react-icons/fa";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import IconLinkRound from "../IconLinkRound/IconLinkRound";

const PortfolioCard = ({
  title,
  codeLink,
  demoLink,
  image,
  description,
  tools = [],
}) => {
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
      <a href={demoLink} target="_blank" rel="noreferrer" title={"Demo"}>
        <img src={image} alt={title} />
      </a>
      <div className="desc">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tools">
          {tools.length > 0 &&
            tools.map((tool, i) => (
              <Tippy content={tool.name} key={i}>
                <img
                  src={`/images/icons/${tool.icon}`}
                  alt={`tool: ${tool.name}`}
                />
              </Tippy>
            ))}
        </div>
        <span>
          <IconLinkRound href={demoLink} title={"Demo"}>
            <FaChrome />
          </IconLinkRound>
          <IconLinkRound href={codeLink} title={"Code"}>
            <FaGithub />
          </IconLinkRound>
        </span>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
