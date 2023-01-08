import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
