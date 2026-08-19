import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
