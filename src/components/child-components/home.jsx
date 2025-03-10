import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../assets/6.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import office from "../../assets/off6.png";

// Imported service images
import residential from "../../assets/8.jpg";
import commercial from "../../assets/9.jpg";
import renovation from "../../assets/7.jpg";
import interior from "../../assets/10.jpeg";
import kitchen from "../../assets/11.jpg";
import flooring from "../../assets/12.jpg";
import roofing from "../../assets/13.png";
import facade from "../../assets/14.jpeg";

function Home() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Slideshow */}
      <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Text Overlay */}
        <motion.div
          className="absolute z-10 flex flex-col items-center px-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h2 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            <span className="absolute inset-0 text-gray-400 blur-sm opacity-70">
              Construction is the art of turning vision into reality.
            </span>
            <span className="relative">
              Construction is the art of turning vision into reality.
            </span>
          </h2>

          <motion.button
            onClick={() => navigate("/contact")}
            className="mt-6 bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-center gap-10 p-10 w-full max-w-7xl">
        {/* Animated Office Image */}
        <motion.div
          className="flex justify-center md:justify-start w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0px 20px 30px rgba(0,0,0,0.2)",
              filter: "brightness(1.05)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ perspective: 1000 }}
          >
            <img
              src={office}
              alt="Office"
              className="object-cover w-full max-w-[380px] h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          className="w-full md:w-1/2 text-gray-800 flex flex-col justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-blue-900">
            Building the Future
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Our construction company is committed to delivering top-quality
            projects that stand the test of time. With a team of skilled
            professionals, we transform ideas into reality, ensuring excellence
            in every brick laid. From residential to commercial projects, we
            bring innovation and precision to the industry.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-lg">
            <li>Experienced and dedicated team</li>
            <li>High-quality materials and craftsmanship</li>
            <li>On-time project completion</li>
            <li>Customer satisfaction is our priority</li>
          </ul>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div
        className="w-full flex flex-col items-center bg-gray-50 py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold text-blue-900 mb-10 text-center">
          Our Construction Services
        </h3>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl w-full">
          {[
            {
              title: "Residential Construction",
              desc: "Custom homes built with precision and quality craftsmanship.",
              img: residential,
            },
            {
              title: "Commercial Buildings",
              desc: "Innovative commercial spaces tailored to your business needs.",
              img: commercial,
            },
            {
              title: "House Renovation",
              desc: "Modernize and upgrade your existing home with expert renovation.",
              img: renovation,
            },
            {
              title: "Interior Fit-outs",
              desc: "Complete interior solutions, from design to execution.",
              img: interior,
            },
            {
              title: "Modular Kitchens",
              desc: "Functional and stylish modular kitchens for modern living.",
              img: kitchen,
            },
            {
              title: "Flooring Solutions",
              desc: "Durable and aesthetic flooring installations for all spaces.",
              img: flooring,
            },
            {
              title: "Roofing & Waterproofing",
              desc: "Reliable roofing and waterproofing services for lasting protection.",
              img: roofing,
            },
            {
              title: "Exterior Facades",
              desc: "Attractive and energy-efficient exterior façade systems.",
              img: facade,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h4 className="text-lg font-semibold text-blue-800 mb-1">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
