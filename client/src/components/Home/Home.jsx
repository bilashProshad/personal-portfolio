import "./Home.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandGithub } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import bilashImage from "../../assets/bilash-prosad.png";
import IconLinkRound from "../IconLinkRound/IconLinkRound";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import resume from "../../assets/resume.pdf";
import { useSetActiveLink } from "../../hooks/useSetActiveLink";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Home = ({ setActiveLink }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [index, setIndex] = useState(1);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  const tick = useCallback(() => {
    const toRotate = ["Web Developer", "Web Designer"];

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex((pervIndex) => pervIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(500);
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  }, [isDeleting, loopNum, text.length]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, text, tick]);

  const sectionRef = useSetActiveLink({
    setState: setActiveLink,
    activeLinkId: "home",
  });

  return (
    <section className="home" id="home" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="left"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.small variants={textVariants}>This is me</motion.small>
          <motion.h1 variants={textVariants}>Bilash Prosad</motion.h1>
          <motion.h3 variants={textVariants}>I'm a {text}</motion.h3>
          <motion.p variants={textVariants}>
            I am a web developer with a passion for creating intuitive and
            user-friendly websites. In my spare time, I enjoy staying up-to-date
            with the latest web development trends and technologies, and I am
            always looking for new challenges and opportunities to grow as a
            developer.
          </motion.p>
          <motion.div variants={textVariants}>
            <a href={resume} download className="button-filled">
              Download CV
            </a>
          </motion.div>
          <div className="social-links">
            <motion.span variants={textVariants} className="label">
              Check Out My
            </motion.span>
            <motion.span>
              <IconLinkRound
                href="https://www.linkedin.com/in/bilash-prosad/"
                initial={{
                  x: "-100vw",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                delay={0.9}
              >
                <GrLinkedinOption />
              </IconLinkRound>
              <IconLinkRound
                href="https://github.com/bilashProshad"
                initial={{
                  x: "-100vw",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                delay={1.2}
              >
                <TbBrandGithub />
              </IconLinkRound>
              <IconLinkRound
                href="https://www.facebook.com/bilash.proshad"
                initial={{
                  x: "-100vw",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                delay={1.5}
              >
                <FaFacebookF />
              </IconLinkRound>
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="right"
          initial={{
            // scale: 0,
            // x: 500,
            opacity: 0,
          }}
          animate={{
            // scale: 1,
            // x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.8 }}
        >
          <img src={bilashImage} alt="bilash prosad" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
