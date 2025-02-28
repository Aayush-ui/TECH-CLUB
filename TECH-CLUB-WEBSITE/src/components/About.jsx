
import React from "react";
import { gsap } from "gsap";

const About = () => {
  React.useEffect(() => {
    gsap.from(".about-content", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="about-section bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto text-center about-content">
        <h2 className="text-4xl font-bold mb-4">About Tech Club</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Welcome to the Tech Club! We are a passionate group of individuals dedicated to exploring 
          the latest trends in technology, building innovative projects, and fostering a community 
          of like-minded tech enthusiasts. Join us to learn, create, and grow together!
        </p>
      </div>
    </section>
  );
};

export default About;
