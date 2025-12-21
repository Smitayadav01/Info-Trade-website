import React from "react";

const Cookies = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16 text-gray-700">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Cookie Policy
        </h1>

        <p className="mb-4 font-medium">
          Cookie Policy for <span className="font-semibold">TezTraders.in</span>
        </p>

        <p className="mb-8 text-sm text-gray-500">
          <strong>Effective Date:</strong> 20-12-25
        </p>

        <p className="mb-8 leading-relaxed">
          This Cookie Policy explains how TezTraders.in ("we", "us", and "our")
          uses cookies and similar technologies to recognize you when you visit
          our website. It explains what these technologies are, why we use them,
          and your rights to control their usage.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          1. What Are Cookies?
        </h2>
        <p className="mb-8 leading-relaxed">
          Cookies are small data files that are placed on your computer or mobile
          device when you visit a website. They are widely used to make websites
          work efficiently and to provide reporting and analytical information.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          2. Why Do We Use Cookies?
        </h2>
        <p className="mb-4">We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Essential Cookies:</strong> Required for core functionality,
            such as logging into your Algo dashboard or accessing premium courses.
          </li>
          <li>
            <strong>Performance & Functionality Cookies:</strong> Improve website
            performance and remember user preferences like language or chart settings.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand website usage,
            such as which trading tips or courses are most viewed.
          </li>
          <li>
            <strong>Security Cookies:</strong> Identify and prevent security risks,
            including unauthorized login attempts.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          3. Third-Party Cookies
        </h2>
        <p className="mb-4">
          In addition to our own cookies, we may use third-party cookies to analyze
          usage and improve marketing effectiveness. These may include:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Google Analytics:</strong> To monitor website traffic and usage patterns.
          </li>
          <li>
            <strong>Facebook Pixel:</strong> To measure the performance of social media advertisements.
          </li>
          <li>
            <strong>TradingView Widgets:</strong> If integrated charts are used,
            TradingView may store cookies to save technical analysis drawings.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          4. How Can You Control Cookies?
        </h2>
        <p className="mb-4 leading-relaxed">
          You have the right to decide whether to accept or reject cookies.
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Browser Controls:</strong> You can configure your browser to
            accept or refuse cookies. Rejecting cookies may limit access to certain
            features, including automated trading portals.
          </li>
          <li>
            <strong>Cookie Banner:</strong> On your first visit, you will see a banner
            allowing you to accept all cookies or manage your preferences.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          5. Updates to This Policy
        </h2>
        <p className="mb-8 leading-relaxed">
          We may update this Cookie Policy from time to time due to operational,
          legal, or regulatory changes. Please review this page periodically to
          stay informed.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          6. Contact Us
        </h2>
        <p className="leading-relaxed">
          If you have any questions about our use of cookies or similar technologies,
          please contact us at:
          <br />
          <strong>Email:</strong> tejtraders99@gmail.com
        </p>

      </div>
    </div>
  );
};

export default Cookies;
