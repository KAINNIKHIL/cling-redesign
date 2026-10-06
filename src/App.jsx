import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Temporary section anchors.
            We'll replace these with real sections next. */}

        <section id="services" className="min-h-screen bg-white" />
        <section id="solutions" className="min-h-screen bg-slate-50" />
        <section id="work" className="min-h-screen bg-white" />
        <section id="about" className="min-h-screen bg-slate-50" />
        <section id="contact" className="min-h-screen bg-slate-950" />
      </main>
    </>
  );
}

export default App;