import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send message. Try again later."));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-teal-100 to-blue-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-teal-800">Get in Touch</h1>
        <p className="mt-4 text-gray-700">We'd love to hear from you! Reach out for inquiries, partnerships, or support.</p>

        {/* Contact Form */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 h-32"
            ></textarea>
            <button type="submit" className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Our Location</h2>
          <iframe
            title="Google Maps"
            className="w-full h-80 rounded-lg shadow-lg"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=New+Delhi,India`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
