import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Specialization } from "./components/Specialization";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React from "react";
export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Specialization />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
