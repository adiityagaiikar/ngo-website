import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: "Our Story", path: "/about#history" },
      { label: "Mission & Vision", path: "/about#mission" },
      { label: "Team", path: "/about#team" },
    ],
    programs: [
      { label: "Education", path: "/about#education" },
      { label: "Healthcare", path: "/about#healthcare" },
      { label: "Food Security", path: "/about#food" },
    ],
    support: [
      { label: "Donate", path: "/donate" },
      { label: "Contact Us", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Organization Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-white">Bal Snehalay</span>
            </Link>
            <p className="text-sm">
              Making a difference in people's lives through support & charity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-amber-500 mb-2 capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-sm hover:text-amber-500 transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-500 mt-1" />
                <span className="text-sm">
                  123 Charity Street, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-amber-500" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-500" />
                <span className="text-sm">contact@balsnehalay.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Bal Snehalay Rainbow Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-amber-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-amber-500 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
