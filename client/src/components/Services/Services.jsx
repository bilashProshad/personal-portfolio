import { useSetActiveLink } from "../../hooks/useSetActiveLink";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Services.scss";

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
        <div className="bottom">
          <Card
            title="Website Design"
            icon={`/images/icons/web-design.svg`}
            text="I can help you create a visually appealing, user-friendly website that reflects your brand and meets the needs of your target audience."
            delay={window.outerWidth <= 570 ? 0 : 0.2}
            x="-100%"
          />
          <Card
            title="Website Development"
            icon={`/images/icons/web-dev.svg`}
            text="From custom coding to integration with third-party platforms, I have the skills and experience to bring your website to life."
            delay={window.outerWidth <= 570 ? 0 : 0.5}
            x={window.outerWidth >= 820 ? "-200%" : "-100%"}
          />
          <Card
            title="Website Maintenance"
            icon={`/images/icons/web-maintenance.svg`}
            text="I can help you keep your website up-to-date and secure with regular updates, backups, and monitoring."
            delay={window.outerWidth <= 570 ? 0 : 0.8}
            x={window.outerWidth <= 820 ? "-100%" : "-300%"}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
