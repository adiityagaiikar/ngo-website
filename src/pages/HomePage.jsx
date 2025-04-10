import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-100 to-red-100 text-gray-900">
      {/* Hero Section - Static instead of carousel */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src="/images/hero.jpg" alt="Making a Difference" className="w-full h-full object-cover brightness-75" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-6">
            <h1 className="text-5xl font-bold drop-shadow-lg">Making a Difference, One Step at a Time</h1>
            <p className="mt-4 text-lg max-w-xl">Join us in empowering communities through education, healthcare, and food security programs.</p>
            <Link to="/donate" className="mt-6 bg-amber-600 hover:bg-amber-700 px-6 py-3 text-white font-semibold rounded-lg text-lg transition-all duration-300">
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-amber-800">Who We Are</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          We are a non-profit organization dedicated to uplifting underprivileged communities by providing education, healthcare, and essential resources.
        </p>
        <img src="/images/about.jpg" alt="NGO Volunteers" className="mt-6 w-full max-w-3xl mx-auto rounded-lg shadow-md" />
        <Link to="/about" className="mt-6 inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all duration-300">
          Learn More
        </Link>
      </div>

      {/* Our Programs */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-4xl font-bold text-amber-700">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 px-6">
          <div className="bg-amber-50 p-6 rounded-lg shadow-lg">
            <img src="/images/education.jpg" alt="Education for children" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold text-amber-800 mt-4">Education</h3>
            <p className="mt-2 text-gray-700">Providing quality education to underprivileged children for a brighter future.</p>
            <Link to="/about#education" className="mt-4 inline-block text-amber-600 font-medium hover:underline">Learn more →</Link>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <img src="/images/food.jpg" alt="Food distribution" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold text-orange-800 mt-4">Food Security</h3>
            <p className="mt-2 text-gray-700">Ensuring no one goes hungry by distributing food to the needy.</p>
            <Link to="/about#food" className="mt-4 inline-block text-orange-600 font-medium hover:underline">Learn more →</Link>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow-lg">
            <img src="/images/healthcare.jpg" alt="Healthcare support" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold text-red-800 mt-4">Healthcare</h3>
            <p className="mt-2 text-gray-700">Providing medical aid and support to underserved communities.</p>
            <Link to="/about#healthcare" className="mt-4 inline-block text-red-600 font-medium hover:underline">Learn more →</Link>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-amber-600 text-white text-center py-16">
        <h2 className="text-4xl font-bold">Your Support Matters</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Every contribution makes a difference. Help us bring hope to those in need.
        </p>
        <Link to="/donate" className="mt-6 inline-block bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
          Donate Now
        </Link>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Become a part of our mission. Whether through donations, volunteering, or spreading awareness, you can help bring real change.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-800 transition-all duration-300">
            Get Involved
          </Link>
          <Link to="/donate" className="inline-block bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
