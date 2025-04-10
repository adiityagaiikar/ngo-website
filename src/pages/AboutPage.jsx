import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
    { id: "values", label: "Our Values" },
    { id: "history", label: "Our History" }
  ];

  const tabContent = {
    mission: "We strive to uplift underprivileged communities by providing access to education, healthcare, and food security programs. Our mission is to create sustainable change through empowerment and support.",
    vision: "We envision a world where everyone has equal opportunities to live a life of dignity and self-sufficiency. A world where no child goes to bed hungry and every person has access to basic healthcare.",
    values: "Our core values include integrity, compassion, transparency, and community. We believe in working together to create lasting positive change in society.",
    history: "Founded in 2010, our organization began with a small group of volunteers. Today, we've grown to serve thousands of beneficiaries across multiple communities."
  };

  return (
    <div className="bg-gradient-to-br from-amber-100 via-orange-200 to-red-300 text-gray-900">
      {/* Hero Section */}
      <div className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-amber-800">About Our NGO</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700">
          We are committed to bringing positive change through education, healthcare, and food distribution.
        </p>
      </div>

      {/* Images Section - No Animation */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold text-amber-800 text-center">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div>
            <img src="/images/ngo1.jpg" alt="NGO Volunteers Teaching Kids" className="w-full h-60 object-cover rounded-lg shadow-md"/>
            <p className="mt-2 text-center font-medium">Education Programs</p>
          </div>
          <div>
            <img src="/images/ngo2.jpg" alt="Food Distribution to the Needy" className="w-full h-60 object-cover rounded-lg shadow-md"/>
            <p className="mt-2 text-center font-medium">Food Distribution</p>
          </div>
          <div>
            <img src="/images/ngo3.jpg" alt="Medical Aid Provided by NGOs" className="w-full h-60 object-cover rounded-lg shadow-md"/>
            <p className="mt-2 text-center font-medium">Healthcare Initiatives</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-wrap border-b">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed">{tabContent[activeTab]}</p>
          </div>
        </div>
      </div>

      {/* Programs Section with IDs for navigation */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-8">Our Programs</h2>
        
        <div id="education" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-amber-700 mb-4">Education Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Our education programs focus on providing quality education to underprivileged children. We run schools, provide scholarships, and offer vocational training to help individuals build better futures.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Primary and secondary education</li>
                <li>Scholarship programs</li>
                <li>Vocational training</li>
                <li>Adult literacy programs</li>
              </ul>
            </div>
            <img src="/images/education-detail.jpg" alt="Education Program" className="rounded-lg shadow-md" />
          </div>
        </div>
        
        <div id="food" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-orange-700 mb-4">Food Security Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <img src="/images/food-detail.jpg" alt="Food Program" className="rounded-lg shadow-md" />
            <div>
              <p className="text-gray-700 mb-4">
                Our food security initiatives ensure that no one goes hungry. We distribute food to needy families, run community kitchens, and implement sustainable farming projects.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Food distribution centers</li>
                <li>Community kitchens</li>
                <li>School meal programs</li>
                <li>Sustainable farming projects</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div id="healthcare" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Healthcare Initiatives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Our healthcare programs provide medical aid to underserved communities. We organize health camps, provide medicines, and raise awareness about health and hygiene.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Medical camps</li>
                <li>Medicine distribution</li>
                <li>Health awareness programs</li>
                <li>Maternal and child health initiatives</li>
              </ul>
            </div>
            <img src="/images/healthcare-detail.jpg" alt="Healthcare Program" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-amber-200 py-16 text-center">
        <h2 className="text-3xl font-semibold text-amber-800">Meet Our Team</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our dedicated team of volunteers and professionals work tirelessly to make a difference in society.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-6 px-6">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center border-t-4 border-amber-500">
            <img src="/images/team1.jpg" alt="Founder" className="w-32 h-32 mx-auto rounded-full mt-4 object-cover"/>
            <h3 className="text-2xl font-bold text-amber-700 mt-4">Jane Doe</h3>
            <p className="text-gray-600 mt-2">Founder & CEO</p>
            <p className="text-gray-700 mt-4">With over 15 years of experience in social work, Jane founded our organization with a vision to create lasting change.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center border-t-4 border-orange-500">
            <img src="/images/team2.jpg" alt="Director" className="w-32 h-32 mx-auto rounded-full mt-4 object-cover"/>
            <h3 className="text-2xl font-bold text-orange-700 mt-4">John Smith</h3>
            <p className="text-gray-600 mt-2">Director of Operations</p>
            <p className="text-gray-700 mt-4">John brings his expertise in project management to ensure our programs run efficiently and effectively.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center border-t-4 border-red-500">
            <img src="/images/team3.jpg" alt="Community Head" className="w-32 h-32 mx-auto rounded-full mt-4 object-cover"/>
            <h3 className="text-2xl font-bold text-red-700 mt-4">Sarah Johnson</h3>
            <p className="text-gray-600 mt-2">Head of Community Outreach</p>
            <p className="text-gray-700 mt-4">Sarah's passion for community development drives our outreach programs and volunteer initiatives.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold">Join Our Mission</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Whether through donations, volunteering, or spreading awareness, you can help bring real change.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-800 transition-all duration-300">
            Contact Us
          </Link>
          <Link to="/donate" className="inline-block bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
