import "./RoundedIconHolder.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";

const RoundedIconHolder = ({ logo, className, tooltip, ...rest }) => {
  return (
    <Tippy content={tooltip}>
      <span className={`roundedIconHolder ${className}`} {...rest}>
        <motion.img
          whileHover={{
            rotate: 360,
          }}
          transition={{ duration: 0.4 }}
          src={`/images/icons/${logo}`}
          alt="skill icon"
        />
      </span>
    </Tippy>
  );
};

export default RoundedIconHolder;
