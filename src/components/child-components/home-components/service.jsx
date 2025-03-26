import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import residential from "../../../assets/8.jpg";
import commercial from "../../../assets/9.jpg";
import renovation from "../../../assets/7.jpg";
import interior from "../../../assets/10.jpeg";
import kitchen from "../../../assets/11.jpg";
import flooring from "../../../assets/12.jpg";
import roofing from "../../../assets/13.png";
import facade from "../../../assets/14.jpeg";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Residential Construction",
      desc: "Tailored homes crafted with precision and care.",
      img: residential,
    },
    {
      title: "Commercial Buildings",
      desc: "Innovative spaces to grow your business.",
      img: commercial,
    },
    {
      title: "House Renovation",
      desc: "Transforming homes into modern masterpieces.",
      img: renovation,
    },
    {
      title: "Interior Fit-outs",
      desc: "Design-driven interiors for every space.",
      img: interior,
    },
    {
      title: "Modular Kitchens",
      desc: "Stylish and practical kitchen solutions.",
      img: kitchen,
    },
    {
      title: "Flooring Solutions",
      desc: "Durable and elegant flooring for all spaces.",
      img: flooring,
    },
    {
      title: "Roofing & Waterproofing",
      desc: "Protection and durability above all.",
      img: roofing,
    },
    {
      title: "Exterior Facades",
      desc: "Aesthetic and functional exterior finishes.",
      img: facade,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-gray-50 py-16 px-4 relative">
      <h3 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        Our Construction Services
      </h3>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedService(service)}
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

      {/* Selected Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-lg flex flex-col items-center relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
                onClick={() => setSelectedService(null)}
              >
                &times;
              </button>
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold text-blue-800 mb-2">
                {selectedService.title}
              </h4>
              <p className="text-gray-700 text-md text-center">
                {selectedService.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Services;
