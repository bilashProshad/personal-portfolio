import "./Home.scss";
import { FiArrowRightCircle } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandGithub } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import bilashImage from "../../assets/bilash-prosad.svg";
import IconLinkRound from "../IconLinkRound/IconLinkRound";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="left">
          <small>This is me</small>
          <h1>Bilash Prosad</h1>
          <h3>I'm a Web Developer</h3>
          <p>
            I am a web developer with a passion for creating intuitive and
            user-friendly websites. In my spare time, I enjoy staying up-to-date
            with the latest web development trends and technologies, and I am
            always looking for new challenges and opportunities to grow as a
            developer.
          </p>
          <div>
            <a href="#contact" className="link">
              Let's Connect <FiArrowRightCircle />
            </a>
          </div>
          <div className="social-links">
            <span className="label">Check Out My</span>
            <span>
              <IconLinkRound href="linkin.com">
                <GrLinkedinOption />
              </IconLinkRound>
              <IconLinkRound href="github.com">
                <TbBrandGithub />
              </IconLinkRound>
              <IconLinkRound href="facebook.com">
                <FaFacebookF />
              </IconLinkRound>
            </span>
          </div>
        </div>

        <div className="right">
          <img src={bilashImage} alt="bilash prosad" />
        </div>
      </div>
    </section>
  );
};

export default Home;
