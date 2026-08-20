import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
