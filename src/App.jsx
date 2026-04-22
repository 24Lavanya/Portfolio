import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Funzone from "./sections/Funzone";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import usePortfolioAnimations from "./hooks/usePortfolioAnimations";

export default function App() {
  usePortfolioAnimations();

  return (
    <div className="main w-full h-[100vh]">
      <div className="home">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Funzone />
        <Contact />
      </div>
    </div>
  );
}
