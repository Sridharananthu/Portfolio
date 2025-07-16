import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "Numpy",
    "Scikit-learn",
    "PowerBI",
    "Flask",
    "TensorFlow",
  ];

  const projects = [
    {
      title: "Pharmacy Managment System",
      description:
        "An offline Pharmacy Management System developed using PHP and WAMP Server to handle stock, billing, and customer data seamlessly.",
      link: "https://github.com/Sridharananthu/Pharmacy-Management-System",
    },
    {
      title: "E-Commerce ",
      description:
        "A full-stack E-Commerce web application built using the MERN stack, featuring user authentication, product listings, cart functionality, and order management.",
      link: "https://github.com/Sridhar194/E-commerce",
    },
    {
      title: "Data Analysis Project ",
      description:
        "A data-driven stock market analysis project using Python to explore trends, calculate moving averages, and visualize stock performance for better investment insights.",
      link: "https://github.com/Sridharananthu/Data-Analysis",
    },
    {
      title: "Fraud detection using AI/ML ",
      description:
        "A research-based study on detecting fraudulent online transactions using Artificial Intelligence techniques, focusing on machine learning models to identify suspicious patterns and enhance cybersecurity in digital payments.",
      link: "/research_paper.pdf",
    },

  ];
  <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="stars"></div>
  <div className="stars2"></div>
  <div className="stars3"></div>
</div>


  return (
    <div className="relative min-h-screen bg-white/80 backdrop-blur-sm text-gray-900 p-6 md:p-12 rounded-lg">
      {/* ────────────────── HEADER ────────────────── */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Sridhar Ananthu</h1>
        <p className="text-lg">
          B.Tech in AI & Data Science | Aspiring Data Analyst / Software Engineer
        </p>
        <div className="flex space-x-4 mt-4">
        
          <a
            href="https://github.com/Sridharananthu"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shridharananthu/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:shridhar.6105@gmail.com">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </header>

      {/* ────────────────── PROJECTS ────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border rounded-lg p-4 shadow-lg backdrop-blur-md bg-white/80 hover:shadow-2xl transition-transform transform hover:-translate-y-1"

            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.description}</p>
             <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
               {p.link.endsWith(".pdf") ? "View Research Paper" : "View on GitHub"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── RESUME ────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          href="/SridharA_resume.pdf"
          download
        >
          Download Resume
        </a>
      </section>

      {/* ────────────────── SKILLS ────────────────── */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}