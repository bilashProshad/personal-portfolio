/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";

const Navbar = ({ activeLink, setActiveLink }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled && "scrolled"}`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <div className={`container ${scrolled && "scrolled"}`}>
        <Logo href="#home" />

        <ul className={`lists ${showNav && "show"}`}>
          <li>
            <a
              className={`link ${activeLink === "home" && "active"}`}
              onClick={() => onUpdateActiveLink("home")}
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`link ${activeLink === "skills" && "active"}`}
              onClick={() => onUpdateActiveLink("skills")}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={`link ${activeLink === "services" && "active"}`}
              onClick={() => onUpdateActiveLink("services")}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`link ${activeLink === "portfolio" && "active"}`}
              onClick={() => onUpdateActiveLink("portfolio")}
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              className={`link ${activeLink === "contact" && "active"}`}
              onClick={() => onUpdateActiveLink("contact")}
              href="#contact"
            >
              Contact
            </a>
          </li>

          <li className="nav-list-btn">
            <Button>Let's Connect</Button>
          </li>
        </ul>

        <ul className="mobile-nav-btn">
          {!showNav && <AiOutlineMenu onClick={() => setShowNav(true)} />}
          {showNav && <AiOutlineClose onClick={() => setShowNav(false)} />}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
