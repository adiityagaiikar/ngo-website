import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/donate", label: "Donate" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-slate-900/90 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
            <span className={`text-2xl font-bold ${
              isScrolled ? "text-teal-600" : "text-white"
            }`}>
              Bal Snehalay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  isScrolled
                    ? isActive(link.path)
                      ? "text-teal-600"
                      : "text-slate-700 hover:text-teal-600"
                    : isActive(link.path)
                    ? "text-teal-400"
                    : "text-white hover:text-teal-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-lg font-medium">
                  <FaUser className={`${
                    isScrolled ? "text-slate-700" : "text-white"
                  }`} />
                  <span className={`${
                    isScrolled ? "text-slate-700" : "text-white"
                  }`}>
                    {user.name}
                  </span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    Dashboard
                  </Link>
                  {user.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className={isScrolled ? "text-slate-700" : "text-white"} />
            ) : (
              <FaBars className={isScrolled ? "text-slate-700" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg font-medium ${
                  isActive(link.path)
                    ? "text-teal-600"
                    : "text-slate-700 hover:text-teal-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block text-lg font-medium text-slate-700 hover:text-teal-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="block text-lg font-medium text-slate-700 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-lg font-medium text-slate-700 hover:text-teal-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block text-lg font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
