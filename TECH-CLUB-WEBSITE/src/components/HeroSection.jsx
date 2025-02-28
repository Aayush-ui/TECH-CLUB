
import React, { useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="hero bg-black text-white h-screen flex items-center justify-center">
      <div className="hero-content text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tech Club</h1>
        <p className="text-xl mb-6">Innovate. Inspire. Build.</p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
