import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use this for React Router
// import { useRouter } from "next/router"; // Use this for Next.js

function Home() {
  const images = ["/1.png", "/2.jpg", "/4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // For React Router
  // const router = useRouter(); // For Next.js

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-black">
      {/* Image Slideshow */}
      <div className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Slideshow"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Text Overlay (No Background) */}
        <div className="absolute z-10 flex flex-col items-center space-y-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Construction is the art of turning vision into reality.
          </h2>

          {/* Contact Button */}
          <button
            onClick={() => navigate("/contact")} // Use router.push("/contact") for Next.js
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
