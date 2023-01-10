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

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-container">
            <Logo className={`logo`} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              delectus placeat ducimus magnam ut quos dolores iusto praesentium.
            </p>
          </div>

          <div className="footer-links">
            <h3>Portfolio</h3>
            <ul>
              <li>
                <a href="https://www.google.com">
                  <BsArrowRightShort /> <span>Ecommerce Website</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com">
                  <BsArrowRightShort /> <span>Video Shareing</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com">
                  <BsArrowRightShort /> <span>Chat App</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
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
          </div>

          <div className="footer-links questions">
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
          </div>
        </div>

        <div className="bottom">
          <div>
            <IconLinkRound href="https://www.linkedin.com/in/bilash-prosad/">
              <GrLinkedinOption />
            </IconLinkRound>
            <IconLinkRound href="https://github.com/bilashProshad">
              <TbBrandGithub />
            </IconLinkRound>
            <IconLinkRound href="https://www.facebook.com/bilash.proshad">
              <FaFacebookF />
            </IconLinkRound>
          </div>

          <p>&copy; Copyright - Bilash Prosad | All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
