import "./SectaionHeader.scss";
import { motion } from "framer-motion";

const SectionHeader = ({ title, description }) => {
  return (
    <>
      <motion.h2
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </>
  );
};

export default SectionHeader;
