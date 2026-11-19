import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pt-20">
        <Projects heading="Selected projects" showAllLink={false} />
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
