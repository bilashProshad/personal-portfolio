import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
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
    <nav className={`navbar ${scrolled && "scrolled"}`}>
      <div className={`container ${scrolled && "scrolled"}`}>
        <a href="#home" className="logo link">
          B<span>P.</span>
        </a>

        <ul className={`lists ${showNav && "show"}`}>
          <li>
            <a
              className={`link ${activeLink === "home" && "active"}`}
              onClick={() => onUpdateActiveLink("home")}
              href="#home"
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
    </nav>
  );
};

export default Navbar;
