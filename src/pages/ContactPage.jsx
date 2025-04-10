import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-teal-100 to-blue-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-teal-800">Get in Touch</h1>
        <p className="mt-4 text-gray-700">We'd love to hear from you! Reach out for inquiries, partnerships, or support.</p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              {status.message && (
                <div
                  className={`mb-6 p-4 rounded ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
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
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#FF6B6B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#FF5252] transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
      </div>
    </div>
  );
};

export default ContactPage;
