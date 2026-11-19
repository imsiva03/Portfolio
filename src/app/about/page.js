import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pt-20">
        <About />
        <Skills />
      </main>
      <footer className="site-footer">
        <Contact />
        <div className="mx-auto max-w-7xl px-5">
          <Footer />
        </div>
      </footer>
    </>
  );
}
