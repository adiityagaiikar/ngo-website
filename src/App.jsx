import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/ui/Header.jsx";  
import Footer from "./components/ui/Footer.jsx";  
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

// Protected Route component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

// Simple page components for Privacy and Terms
const PrivacyPage = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <h1 className="text-3xl font-bold text-amber-800 mb-6">Privacy Policy</h1>
    <div className="prose prose-lg">
      <p className="mb-4">
        At Bal Snehalay, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">Information We Collect</h2>
      <p className="mb-4">
        We collect information that you provide directly to us, such as when you make a donation, register for an account, or contact us.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to process your donations, communicate with you about our programs, and improve our services.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">Information Sharing</h2>
      <p className="mb-4">
        We do not sell or share your personal information with third parties except as described in this policy.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at privacy@balsnehalay.org.
      </p>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <h1 className="text-3xl font-bold text-amber-800 mb-6">Terms of Service</h1>
    <div className="prose prose-lg">
      <p className="mb-4">
        Welcome to Bal Snehalay. By accessing or using our website, you agree to be bound by these Terms of Service.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">Donations</h2>
      <p className="mb-4">
        All donations are voluntary and non-refundable. We strive to use your donations as specified, but reserve the right to allocate funds where most needed.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">User Accounts</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">Intellectual Property</h2>
      <p className="mb-4">
        All content on this website is the property of Bal Snehalay and is protected by copyright and other intellectual property laws.
      </p>
      <h2 className="text-2xl font-semibold text-amber-700 mt-6 mb-3">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms of Service, please contact us at terms@balsnehalay.org.
      </p>
    </div>
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <div className="min-h-screen p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <div>User Dashboard</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <div>Admin Dashboard</div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
