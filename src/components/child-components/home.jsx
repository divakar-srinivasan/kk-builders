import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from '../../assets/6.jpg'
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import office from '../../assets/off6.png'
function Home() {
  const images = [img1,img2,img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image Slideshow */}
      <div className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Slideshow"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-200" : "opacity-0"
            }`}
          />
        ))}

        {/* Text Overlay with Animation */}
        <motion.div
          className="absolute z-10 flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        <h2 className="relative text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center animate-bounce">
  <span className="absolute inset-0 text-gray-400 blur-md">Construction is the art of turning vision into reality.</span>
  <span className="relative">Construction is the art of turning vision into reality.</span>
</h2>

          {/* Contact Button */}
          <motion.button
            onClick={() => navigate("/contact")}
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300"
            whileHover={{ rotate: 5, scale: 1.1 }}
            whileTap={{ rotate: -5, scale: 0.9 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
      <br />
      {/* Image and Content Section */}
      <div className="flex justify-start gap-10 p-10">
        <div className="w-1/2 ps-10">
          <img src={office} alt="Office" className="h-130 w-130" />
        </div>
        <div className="w-1/2 p-6 text-gray-800">
          <h3 className="text-3xl font-bold mb-4">Building the Future</h3>
          <p className="text-lg">
            Our construction company is committed to delivering top-quality projects 
            that stand the test of time. With a team of skilled professionals, 
            we transform ideas into reality, ensuring excellence in every brick laid. 
            From residential to commercial projects, we bring innovation and precision 
            to the industry.
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg">
            <li>Experienced and dedicated team</li>
            <li>High-quality materials and craftsmanship</li>
            <li>On-time project completion</li>
            <li>Customer satisfaction is our priority</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
