import { useEffect } from "react";

type RazorpayEnrollButtonProps = {
  courseId: string;
};

const razorpayButtonMap: Record<string, string> = {
  "6969cb9c4e469a00f68b6d3f": "pl_Rv0ydjtND1Xopy", // Elite Options Selling
  "6969cb9c4e469a00f68b6d40": "pl_RuwGnL8wY1xYvr", // Algo Trading
  "6969cb9c4e469a00f68b6d41": "pl_Rv10YlB3mYoAhQ", // SL Hunting
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
