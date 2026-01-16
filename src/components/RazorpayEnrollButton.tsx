import { useEffect } from "react";

type RazorpayEnrollButtonProps = {
  courseId: string;
  amount: number;
};

const RazorpayEnrollButton = ({ courseId, amount }: RazorpayEnrollButtonProps) => {
  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Your Razorpay Key
      amount: amount * 100, // Convert to paise
      currency: "INR",
      name: "TezTraders",
      description: "Course Purchase",
      handler: function (response: any) {
        console.log("Payment Success:", response);
        window.location.href = "/payment-success";
      },
      theme: {
        color: "#10B981",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Enroll Now
    </button>
  );
};

export default RazorpayEnrollButton;
