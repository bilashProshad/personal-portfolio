import "./Input.scss";
import { motion } from "framer-motion";

const Input = ({ type, className, ...rest }) => {
  return (
    <motion.input
      type={type || "text"}
      className={`input ${className}`}
      {...rest}
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

export default Input;
