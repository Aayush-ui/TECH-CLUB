
import React from "react";
import { gsap } from "gsap";

const projects = [
  { title: "AI Assistant", description: "An AI-powered virtual assistant for productivity.", link: "#" },
  { title: "Tech Blog", description: "A blog platform featuring the latest tech trends.", link: "#" },
  { title: "IoT Home Automation", description: "An IoT-based system for smart homes.", link: "#" },
];

const Projects = () => {
  React.useEffect(() => {
    gsap.from(".project-card", {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="projects-section bg-gray-100 text-gray-900 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 block hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
