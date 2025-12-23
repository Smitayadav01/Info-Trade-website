import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-emerald-600 w-16 h-16" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thank You! 🎉
        </h1>
        <p className="text-lg text-emerald-600 font-semibold mb-6">
          Payment Successful
        </p>

        {/* Info */}
        <p className="text-gray-600 mb-6">
          Your payment has been received successfully.  
          Please complete the steps below to get access to your course.
        </p>

        {/* Steps */}
        <div className="text-left space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="font-bold text-emerald-600">Step 1.</span>
            <p className="text-gray-700">
              Click the WhatsApp button below and open chat with our team.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-bold text-emerald-600">Step 2.</span>
            <p className="text-gray-700">
              Send your <strong>payment screenshot</strong> along with your
              <strong> registered name and telegram id</strong>.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-bold text-emerald-600">Step 3.</span>
            <p className="text-gray-700">
              Our team will verify your payment and you will be instantly
              <strong> added to the official course group</strong>.
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919453980510"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Go to WhatsApp
        </a>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6">
          ⚠ Please do not refresh or close this page before contacting us.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
