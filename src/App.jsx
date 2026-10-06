import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Process />

        <section id="work" className="h-screen" />
        <section id="contact" className="h-screen" />
      </main>
    </>
  );
}

export default App;