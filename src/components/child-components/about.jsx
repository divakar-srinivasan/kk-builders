import bg1 from '../../assets/5.jpg'
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to the Contact page

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>

        {/* Vision Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            At [Your Company Name], we envision a world where every structure is built with innovation, sustainability, and excellence. We strive to be the leading construction company, transforming ideas into reality while setting new standards in quality and reliability.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver exceptional construction services that exceed client expectations. We are committed to using cutting-edge technology, sustainable practices, and a customer-centric approach to build spaces that inspire and endure.
          </p>
        </div>

        {/* Works Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Works</h2>
          <p className="text-gray-600 leading-relaxed">
            Over the years, we have successfully completed a wide range of projects, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>Residential complexes and custom homes</li>
            <li>Commercial buildings and office spaces</li>
            <li>Renovation and remodeling projects</li>
            <li>Sustainable and eco-friendly constructions</li>
          </ul>
        </div>

        {/* Button to Contact Page */}
        <div className="text-center">
          <Link
            to="/contact" // Replace with your Contact page route
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;