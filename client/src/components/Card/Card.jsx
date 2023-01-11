import "./Card.scss";
import { motion } from "framer-motion";

const Card = ({
  icon,
  title,
  text,
  className,
  defaultContent = true,
  children,
  delay = 0,
  x = "-100%",
  ...rest
}) => {
  return defaultContent ? (
    <motion.div
      className={`defaultCard ${className}`}
      {...rest}
      initial={{
        x: x,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <img src={icon} alt={title} />

      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  ) : (
    <motion.div className={`card ${className}`}>{children}</motion.div>
  );
};

export default Card;
