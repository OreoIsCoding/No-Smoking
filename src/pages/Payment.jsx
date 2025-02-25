import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FinesPenalties = () => {
  const [isPaid, setIsPaid] = useState(false);
const navigate= useNavigate();
  const handlePayment = () => {
    setIsPaid(true);
    setTimeout(() => {
      navigate("/wallet"); // Redirect to Wallet page after 2 seconds
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      <header className="bg-green-900 text-white text-lg font-semibold p-4 text-center">
        FINES & PENALTIES
      </header>
      <main className="flex-grow p-6">
        <div className="mb-6">
          <h3 className="text-gray-600 font-semibold">PAY WITH</h3>
          <div className="bg-green-100 p-4 rounded-lg flex justify-between items-center mt-2">
            <div>
              <p className="text-lg font-semibold">GCash</p>
              <p className="text-sm text-green-500">Pay now</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">PHP 2,578.49</p>
              <p className="text-xs text-gray-500">Available Balance</p>
            </div>
            <span className="text-green-500 text-xl">✔</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-gray-600 font-semibold">YOU ARE ABOUT TO PAY</h3>
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <div className="flex justify-between">
              <p>Amount Due</p>
              <p className="font-semibold">PHP 1,047.00</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Total Amount</p>
              <p className="font-semibold">PHP 947.00</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mb-6">
          Please review to ensure that the details are correct before you proceed.
        </p>

        {isPaid && (
          <div className="text-center bg-green-500 text-white p-4 rounded-lg font-semibold">
            Payment Successful! Redirecting...
          </div>
        )}
      </main>
      <footer className="p-4 bg-white shadow-lg">
        <button
          className="w-full bg-green-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-600"
          onClick={handlePayment}
          disabled={isPaid} // Disable button after payment
        >
          {isPaid ? "Processing..." : "Pay & Confirm"}
        </button>
      </footer>
    </div>
  );
};

export default FinesPenalties;
