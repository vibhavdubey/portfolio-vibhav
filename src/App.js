import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

function App() {
  return (
    <>
      {/* all components */}
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Education />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
