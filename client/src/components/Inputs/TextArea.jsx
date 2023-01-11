import "./TextArea.scss";
import { motion } from "framer-motion";

const TextArea = ({ className, ...rest }) => {
  return (
    <motion.textarea
      className={`textArea ${className}`}
      {...rest}
      rows="5"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default TextArea;
