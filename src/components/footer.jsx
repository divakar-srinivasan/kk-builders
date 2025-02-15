import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src={logo} // replace with your logo path
            alt="Company Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-center md:text-right">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p className="text-sm">Contact us at: contact@yourcompany.com</p>
          <p className="text-sm">Follow us on social media: Facebook | Instagram | Twitter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;