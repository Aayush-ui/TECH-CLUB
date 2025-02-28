
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          ></textarea>
        </div>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
