import { CheckCircle } from "lucide-react";
import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const location = useLocation();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const paymentId =
      params.get("razorpay_payment_id") ||
      params.get("payment_id");

    // ✅ Allow page if user came via Razorpay redirect
    if (paymentId || document.referrer.includes("razorpay")) {
      setAllowed(true);
    }
  }, [location]);

  // ⏳ Wait before decision
  if (!allowed) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 text-center">

        <div className="flex justify-center mb-4">
          <CheckCircle className="text-emerald-600 w-16 h-16" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thank You! 🎉
        </h1>
        <p className="text-lg text-emerald-600 font-semibold mb-6">
          Payment Successful
        </p>

        <p className="text-gray-600 mb-6">
          Your payment has been received successfully.
          Please complete the steps below to get access to your course.
        </p>

        <div className="text-left space-y-4 mb-8">
          <p><strong>Step 1:</strong> Click the WhatsApp button below.</p>
          <p>
            <strong>Step 2:</strong> Send your <b>payment screenshot</b>,
            registered name and <b>Telegram ID</b>.
          </p>
          <p>
            <strong>Step 3:</strong> Our team will verify and add you to the
            <b> official course group</b>.
          </p>
        </div>

        <a
          href="https://wa.me/919453980510"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Go to WhatsApp
        </a>

        <p className="text-sm text-gray-500 mt-6">
          ⚠ Please do not refresh or close this page before contacting us.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
