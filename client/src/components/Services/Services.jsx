import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services" id="services">
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
          />
          <Card
            title="Website Development"
            icon={`/images/icons/web-dev.svg`}
            text="From custom coding to integration with third-party platforms, I have the skills and experience to bring your website to life."
          />
          <Card
            title="Website Maintenance"
            icon={`/images/icons/web-maintenance.svg`}
            text="I can help you keep your website up-to-date and secure with regular updates, backups, and monitoring."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
