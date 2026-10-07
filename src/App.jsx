import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Innovation from "./components/Innovation";

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
        <section id="contact" className="h-screen" />
      </main>
    </>
  );
}

export default App;