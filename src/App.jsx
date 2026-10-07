import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Innovation from "./components/Innovation";
import WhyCling from "./components/WhyCling";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Innovation />
        <WhyCling />
        <CTA />
      </main>
    </>
  );
}

export default App;