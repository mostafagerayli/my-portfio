"use client";

import { useEffect, useRef, useState } from "react";



import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contant";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Page() {
  const [active, setActive] = useState("home");
  const observers = useRef([]);

  useEffect(() => {
    const options = { threshold: 0.5 };

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(s.id);
      }, options);

      observer.observe(el);
      observers.current.push(observer);
    });

    return () => observers.current.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#020617] text-white">
      {/* NAVBAR */}
      <Navbar scrollTo={scrollTo} active={active} />

      {/* CONTENT */}
      <main className="pt-16">
        <section
          id="home"
          className="min-h-screen bg-[#111827] scroll-mt-16"
        >
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen bg-[#020617] scroll-mt-16"
        >
          <About />
        </section>

        <section
          id="projects"
          className="min-h-screen bg-[#111827] scroll-mt-16"
        >
          <Projects />
        </section>

        <section
          id="skills"
          className="min-h-screen bg-[#020617] scroll-mt-16"
        >
          <Skills />
        </section>

        <section
          id="contact"
          className="min-h-screen bg-[#111827] scroll-mt-16"
        >
          <Contact />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
