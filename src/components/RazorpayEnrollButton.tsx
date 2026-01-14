import { useEffect } from "react";

type RazorpayEnrollButtonProps = {
  courseId: string;
};

const razorpayButtonMap: Record<string, string> = {
  "6965e8db86b727c96cdd5f3a": "pl_Rv0ydjtND1Xopy", // Elite Options Selling
  "6965e8db86b727c96cdd5f3b": "pl_RuwGnL8wY1xYvr", // Algo Trading
  "6965e8db86b727c96cdd5f3c": "pl_Rv10YlB3mYoAhQ", // SL Hunting
};

const RazorpayEnrollButton = ({ courseId }: RazorpayEnrollButtonProps) => {
  useEffect(() => {
    const form = document.getElementById(
      "razorpay-form"
    ) as HTMLFormElement | null;

    if (!form) return;

    // Clear previous button (important when switching courses)
    form.innerHTML = "";

    const paymentButtonId = razorpayButtonMap[courseId];

    if (!paymentButtonId) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", paymentButtonId);

    form.appendChild(script);
  }, [courseId]);

  return (
    <form
      id="razorpay-form"
      className="w-full md:w-auto"
    />
  );
};

export default RazorpayEnrollButton;
