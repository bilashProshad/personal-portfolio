import { useState } from "react";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Background from "./components/Background/Background";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className="App">
      <Background />
      <Cursor />
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Home setActiveLink={setActiveLink} />
      <Skills setActiveLink={setActiveLink} />
      <Services setActiveLink={setActiveLink} />
      <Portfolio setActiveLink={setActiveLink} />
      <Contact setActiveLink={setActiveLink} />
      <Footer />
    </div>
  );
}

export default App;
