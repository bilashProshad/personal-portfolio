import "./Footer.scss";
import Logo from "../Logo/Logo";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandGithub } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import {
  MdOutlineLocationOn,
  MdOutlineCall,
  MdOutlineMail,
} from "react-icons/md";
import IconLinkRound from "../IconLinkRound/IconLinkRound";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="top">
          <motion.div
            className="logo-container"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            <Logo className={`logo`} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              delectus placeat ducimus magnam ut quos dolores iusto praesentium.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            <h3>Portfolio</h3>
            <ul>
              <li>
                <a
                  href="https://online-bazar-alpha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsArrowRightShort /> <span>Online Bazar</span>
                </a>
              </li>
              <li>
                <a
                  href="https://vid-vibes.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsArrowRightShort /> <span>VidVibes</span>
                </a>
              </li>
              <li>
                <a
                  href="https://alpha-chat-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsArrowRightShort /> <span>Chat App</span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            <h3>Services</h3>
            <ul>
              <li>
                <a href="https://www.google.com">
                  <BsArrowRightShort /> <span>Website Development</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com">
                  <BsArrowRightShort /> <span>Website Design</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com">
                  <BsArrowRightShort /> <span>Website Maintainance</span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-links questions"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <a href="https://www.google.com">
                  <MdOutlineLocationOn /> <span>Dhaka, Bangladesh</span>
                </a>
              </li>
              <li>
                <a href="tel:+8801788228533">
                  <MdOutlineCall /> <span>+88 01788-228533</span>
                </a>
              </li>
              <li>
                <a href="mailto:pbilash64@gmail.com">
                  <MdOutlineMail /> <span>pbilash64@gmail.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="bottom">
          <div>
            <IconLinkRound
              href="https://www.linkedin.com/in/bilash-prosad/"
              initial={{
                x: "-100%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
            >
              <GrLinkedinOption />
            </IconLinkRound>
            <IconLinkRound
              href="https://github.com/bilashProshad"
              initial={{
                x: "-200%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              delay={0.3}
            >
              <TbBrandGithub />
            </IconLinkRound>
            <IconLinkRound
              href="https://www.facebook.com/bilash.proshad"
              initial={{
                x: "-300%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              delay={0.6}
            >
              <FaFacebookF />
            </IconLinkRound>
          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            &copy; Copyright - Bilash Prosad | All Rights Reserved
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
