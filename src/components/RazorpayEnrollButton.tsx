import { useEffect } from "react";

const RazorpayEnrollButton = () => {
  useEffect(() => {
    const form = document.getElementById(
      "razorpay-form"
    ) as HTMLFormElement | null;

    if (!form) return;

    // Prevent duplicate script
    if (form.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute(
      "data-payment_button_id",
      "pl_RuwGnL8wY1xYvr"
    );

    form.appendChild(script);
  }, []);

  return (
    <form id="razorpay-form" className="w-full md:w-auto"></form>
  );
};

export default RazorpayEnrollButton;
