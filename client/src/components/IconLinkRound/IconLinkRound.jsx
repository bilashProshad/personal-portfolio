import "./IconLinkRound.scss";
import { motion } from "framer-motion";

const IconLinkRound = ({ children, href, className, delay = 0, ...rest }) => {
  return (
    <motion.a
      href={href}
      className={`icon-link ${className}`}
      transition={{ delay: delay, duration: 0.3 }}
      target="_blank"
      {...rest}
    >
      {children}
    </motion.a>
  );
};

export default IconLinkRound;
