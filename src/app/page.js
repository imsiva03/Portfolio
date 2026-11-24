
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="portfolio-shell">
        <div className="home-about-wrapper">
          <Hero />
          <About />
          <div className="skill-ribbon"><div><span>Full Stack Development ✦ React ✦ Database Design ✦</span><span aria-hidden="true">Full Stack Development ✦ React ✦ Database Design ✦</span></div></div>
          <Projects />
        </div>

        <WebsiteShowcase />
      </main>

      <Footer />
    </>
  );
}

