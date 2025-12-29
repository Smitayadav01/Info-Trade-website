import React from "react";

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16 text-gray-700">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>

        <p className="mb-4 font-medium">
          Privacy Policy for <span className="font-semibold">TezTraders.in</span>
        </p>

        <p className="mb-8 text-sm text-gray-500">
          <strong>Effective Date:</strong> 20/12/2025 <br />
          <strong>Last Updated:</strong> 20/12/2025
        </p>

        <p className="mb-8 leading-relaxed">
          Welcome to TezTraders.in. We are committed to protecting your personal and
          financial information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website and
          use our services, including Trading, Portfolio Management Services (PMS),
          Courses, Subscription-based Algo Systems, Fund Management, and Advisory Tips.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Personal Identification Information:</strong> Name, email address,
            phone number, and physical address.
          </li>
          <li>
            <strong>Financial Information:</strong> Bank account details, PAN card number,
            trading account numbers, and transaction history (as required for PMS and fund management).
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, device information,
            and usage data via cookies and similar technologies.
          </li>
          <li>
            <strong>Trading Data:</strong> API keys and trading logs required for Algo system functionality.
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Service Delivery:</strong> Managing subscriptions, advisory tips, and algo strategies.</li>
          <li><strong>Compliance:</strong> Meeting SEBI and other regulatory requirements.</li>
          <li><strong>Personalization:</strong> Tailoring courses and investment suggestions.</li>
          <li><strong>Security:</strong> Identity verification and fraud prevention.</li>
          <li><strong>Communication:</strong> Updates, newsletters, and marketing (opt-out available).</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          3. Data Sharing and Disclosure
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Third-Party Service Providers:</strong> Payment gateways, hosting services, SMS/Email providers.</li>
          <li><strong>Regulatory Authorities:</strong> SEBI, RBI, or judicial bodies when legally required.</li>
          <li><strong>Brokers:</strong> For Algo system integration or PMS execution.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          4. Special Provisions for Algo Systems & Advisory
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>API Security:</strong> Industry-standard encryption is used. We do not store master trading passwords.
          </li>
          <li>
            <strong>Performance Tracking:</strong> Anonymized performance data may be used for marketing without revealing identities.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          5. Security of Your Data
        </h2>
        <p className="mb-8 leading-relaxed">
          We implement strict security measures including SSL encryption and restricted
          access controls. However, no online system is 100% secure. Users are encouraged
          to use strong passwords and enable two-factor authentication (2FA).
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          6. Your Rights
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Access and update your personal information.</li>
          <li>Withdraw consent for data processing (may limit services).</li>
          <li>Request deletion of your account (subject to regulatory requirements).</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          7. Cookies Policy
        </h2>
        <p className="mb-8 leading-relaxed">
          We use cookies to enhance user experience. You can control cookie settings through your browser.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          8. Changes to This Policy
        </h2>
        <p className="mb-8 leading-relaxed">
          We may update this policy periodically. Changes will be posted on this page
          with an updated effective date.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          9. Contact Us & Grievance Redressal
        </h2>
        <p className="leading-relaxed">
          <strong>Grievance Officer:</strong> Nikhil <br />
          <strong>Email:</strong> tejtraders99@gmail.com <br />
          <strong>Address:</strong> Mumbai, Maharashtra, India
        </p>

      </div>
    </div>
  );
};

export default Privacy;
