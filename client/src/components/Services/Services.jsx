import { useSetActiveLink } from "../../hooks/useSetActiveLink";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Services.scss";
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const Services = ({ setActiveLink }) => {
  const sectionRef = useSetActiveLink({
    setState: setActiveLink,
    activeLinkId: "services",
  });

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="top">
          <SectionHeader
            title="Services"
            description="As a web developer, I offer a wide range of services:"
          />
        </div>
        <motion.div
          className="bottom"
          variants={cardVariants}
          initial="initial"
          whileInView={"animate"}
        >
          <Card
            title="Website Design"
            icon={`/images/icons/web-design.svg`}
            text="I can help you create a visually appealing, user-friendly website that reflects your brand and meets the needs of your target audience."
            variants={cardVariants}
          />
          <Card
            title="Website Development"
            icon={`/images/icons/web-dev.svg`}
            text="From custom coding to integration with third-party platforms, I have the skills and experience to bring your website to life."
            variants={cardVariants}
          />
          <Card
            title="Website Maintenance"
            icon={`/images/icons/web-maintenance.svg`}
            text="I can help you keep your website up-to-date and secure with regular updates, backups, and monitoring."
            variants={cardVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
