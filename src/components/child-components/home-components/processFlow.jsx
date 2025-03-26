import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProcessFlow = () => {
  const steps = [
    "Process from the Start",
    "New Client",
    "Site Visit (On-going Projects)",
    "Token Advance",
    "Plan Approval",
    "OK",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-b">
      <h2 className="text-2xl font-bold mb-6">Project Process Flow</h2>
      {steps.map((step, index) => {
        const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

        return (
          <div key={index} className="flex flex-col items-center mb-6" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-semibold w-64 text-center"
            >
              {step}
            </motion.div>
            {index !== steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
              >
                <FaArrowDown className="mt-4 animate-bounce text-xl" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProcessFlow;