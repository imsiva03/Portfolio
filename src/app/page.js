
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="portfolio-shell">
      <Navbar />

      <div className="home-about-wrapper">
        <Hero />
        <About />
        <Projects/>
      </div>
    </main>
  );
}
