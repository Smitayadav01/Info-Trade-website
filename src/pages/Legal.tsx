import React from "react";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Legal Information
          </h1>
          <p className="text-lg text-gray-600">
            Transparency and trust are important to us. Please review our legal policies.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          <Link to="/privacy" className="border rounded-2xl p-8 hover:shadow-lg transition text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Policy</h3>
            <p className="text-gray-600">
              Learn how we collect, use, and protect your personal data.
            </p>
          </Link>

          <Link to="/terms" className="border rounded-2xl p-8 hover:shadow-lg transition text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Terms & Conditions</h3>
            <p className="text-gray-600">
              Rules and guidelines for using our services and website.
            </p>
          </Link>

          <Link to="/cookies" className="border rounded-2xl p-8 hover:shadow-lg transition text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cookie Policy</h3>
            <p className="text-gray-600">
              Information about cookies and tracking technologies.
            </p>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default Legal;
