import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competencies from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Competitions from './components/Competitions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Competencies />
      <Experience />
      <Projects />
      <Competitions />
      <Contact />
      <Footer />
    </>
  );
}
