import "./Card.scss";
import { motion } from "framer-motion";

const Card = ({
  icon,
  title,
  text,
  className,
  defaultContent = true,
  children,

  ...rest
}) => {
  return defaultContent ? (
    <motion.div className={`defaultCard ${className}`} {...rest}>
      <img src={icon} alt={title} />

      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  ) : (
    <motion.div className={`card ${className}`}>{children}</motion.div>
  );
};

export default Card;
