import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import OurStory from "./components/OurStory";
import GlobalPresence from "./components/GlobalPresence";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Innovation from "./components/Innovation";
import WhyCling from "./components/WhyCling";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <OurStory />
        <GlobalPresence />
        <Process />
        <Portfolio />
        <Innovation />
        <WhyCling />
        <CTA />
        
      </main>
           <Footer />
    </>
  );
}

export default App;