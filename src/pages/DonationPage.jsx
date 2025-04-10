import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const DonationPage = () => {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationImpact, setDonationImpact] = useState({
    meals: 0,
    education: 0,
    healthcare: 0
  });

  const predefinedAmounts = [100, 500, 1000, 2000, 5000];

  useEffect(() => {
    // Calculate impact based on amount
    const calculateImpact = (value) => {
      const numValue = parseFloat(value) || 0;
      setDonationImpact({
        meals: Math.floor(numValue / 50), // ₹50 per meal
        education: Math.floor(numValue / 1000), // ₹1000 per month for education
        healthcare: Math.floor(numValue / 500) // ₹500 per medical checkup
      });
    };

    calculateImpact(amount || customAmount);
  }, [amount, customAmount]);

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount("");
  };

  const handleDonate = async () => {
    const donationAmount = amount || customAmount;
    if (!donationAmount || donationAmount < 1) {
      alert("Please enter a valid amount");
      return;
    }

    setIsProcessing(true);

    try {
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: donationAmount * 100, // Convert to paise
        currency: "INR",
        name: "NGO Name",
        description: "Donation for Social Cause",
        image: "/images/logo.png",
        handler: function (response) {
          // Handle successful payment
          console.log("Payment successful", response);
          alert("Thank you for your donation!");
          setAmount("");
          setCustomAmount("");
        },
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: ""
        },
        theme: {
          color: "#F97316"
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-200 to-red-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Make a Donation</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {predefinedAmounts.map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAmountSelect(value)}
                    className={`p-4 rounded-lg text-center transition-all duration-300 ${
                      amount === value
                        ? "bg-amber-500 text-white"
                        : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                    }`}
                  >
                    ₹{value}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Custom Amount (₹)
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter amount"
                />
              </div>

              <button
                onClick={handleDonate}
                disabled={isProcessing}
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Donate Now"}
              </button>
            </div>
          </div>

          {/* Impact Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Your Impact</h2>
            
            <div className="space-y-6">
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-amber-800">Meals Provided</h3>
                    <p className="text-sm text-gray-600">₹50 provides one meal</p>
                  </div>
                  <span className="text-2xl font-bold text-amber-600">
                    {donationImpact.meals}
                  </span>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-orange-800">Education Support</h3>
                    <p className="text-sm text-gray-600">₹1000 supports education for a month</p>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">
                    {donationImpact.education}
                  </span>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-red-800">Healthcare Checkups</h3>
                    <p className="text-sm text-gray-600">₹500 provides one medical checkup</p>
                  </div>
                  <span className="text-2xl font-bold text-red-600">
                    {donationImpact.healthcare}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Why Donate?</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Support education for underprivileged children</li>
                <li>Provide meals to those in need</li>
                <li>Enable access to healthcare services</li>
                <li>Create sustainable change in communities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
