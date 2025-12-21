import React from "react";

const Terms = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16 text-gray-700">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mb-4 font-medium">
          Terms of Service for <span className="font-semibold">TezTraders.in</span>
        </p>

        <p className="mb-8 text-sm text-gray-500">
          <strong>Effective Date:</strong> 20-12-25
        </p>

        <p className="mb-8 leading-relaxed">
          These Terms of Service ("Terms") govern your access to and use of the website
          TezTraders.in and the services provided by TezTraders ("we," "us," or "our").
          By accessing or using our website, you agree to be bound by these Terms.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          1. Eligibility and Registration
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Age:</strong> You must be at least 18 years old to use our services.
          </li>
          <li>
            <strong>Account:</strong> You are responsible for maintaining the confidentiality
            of your account credentials. All activities under your account are your responsibility.
          </li>
          <li>
            <strong>KYC:</strong> For PMS and Fund Management, you agree to provide accurate
            KYC documents as required by Indian law.
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          2. Nature of Services
        </h2>
        <p className="mb-4">TezTraders.in provides the following services:</p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Courses:</strong> Educational content related to stock markets and trading.</li>
          <li><strong>Subscription Algo Systems:</strong> Software tools that automate trading strategies.</li>
          <li><strong>Advisory Tips:</strong> Market entry and exit recommendations.</li>
          <li><strong>PMS / Fund Management:</strong> Professional management of investment portfolios.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          3. Financial Risk and No-Guarantee Disclaimer
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Market Risk:</strong> Trading in equities, derivatives (F&O), and commodities
            involves significant risk, including loss of capital.
          </li>
          <li>
            <strong>No Guarantees:</strong> We do not guarantee profits or protection from losses.
            Past performance is not indicative of future results.
          </li>
          <li>
            <strong>Self-Directed Trading:</strong> Algo users are responsible for monitoring their
            own broker terminals. We are not liable for broker-side technical issues.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          4. Subscription and Payments
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Billing:</strong> Subscription fees for Algos, Courses, or Advisory services
            must be paid in advance.
          </li>
          <li>
            <strong>Refund Policy:</strong> All sales are final. No refunds will be provided once
            a subscription is activated or a course is accessed.
          </li>
          <li>
            <strong>Automatic Renewal:</strong> Subscriptions may automatically renew unless cancelled
            before the billing cycle ends.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          5. Intellectual Property
        </h2>
        <p className="mb-8 leading-relaxed">
          All content on TezTraders.in, including course materials, proprietary trading algorithms,
          strategy logic, and website code, is the intellectual property of TezTraders.in.
          Unauthorized sharing, resale, copying, or reverse-engineering is strictly prohibited.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          6. Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Financial losses incurred by following our tips or using our Algo systems.</li>
          <li>Technical failures, API disconnects, or internet outages.</li>
          <li>Any indirect, incidental, or consequential damages.</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          7. Regulatory Compliance (SEBI Disclosure)
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Advisory:</strong> Advisory services follow SEBI guidelines. If not SEBI registered,
            tips are for educational purposes only.
          </li>
          <li>
            <strong>Algo Trading:</strong> Users are responsible for compliance with broker and SEBI
            regulations related to automated trading.
          </li>
        </ul>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          8. User Conduct
        </h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Engage in fraudulent, illegal, or misleading activities.</li>
          <li>Bypass security measures or scrape platform data.</li>
          <li>Resell or redistribute advisory services without authorization.</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          9. Termination of Service
        </h2>
        <p className="mb-8 leading-relaxed">
          We reserve the right to suspend or terminate access to our services without notice
          if these Terms are violated or if user behavior is harmful to our business or other users.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          10. Governing Law and Jurisdiction
        </h2>
        <p className="mb-8 leading-relaxed">
          These Terms are governed by the laws of India. Any disputes shall be subject to the
          exclusive jurisdiction of the courts located in India.
        </p>

        {/* Section 11 */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          11. Contact Information
        </h2>
        <p className="leading-relaxed">
          <strong>Email:</strong> tejtraders99@gmail.com <br />
        </p>

      </div>
    </div>
  );
};

export default Terms;
