import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConvertPoints = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userPoints, setUserPoints } = location.state || { userPoints: 0, setUserPoints: null };

  const [pointsToConvert, setPointsToConvert] = useState("");
  const [isConverted, setIsConverted] = useState(false);
  const [conversionRate] = useState(0.10);
  const [error, setError] = useState("");
  const [isInputError, setIsInputError] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("GCash");

  const handleConvert = () => {
    if (!pointsToConvert || pointsToConvert <= 0) {
      setError("Please enter a valid amount of points.");
      setIsInputError(true);
      return;
    }
  
    if (pointsToConvert > userPoints) {
      setError("You don't have enough points to convert.");
      setIsInputError(true);
      return;
    }
  
    if (setUserPoints) {
      setUserPoints((prevPoints) => prevPoints - pointsToConvert);
    }
  
    setIsConverted(true);
    setError("");
  
    setTimeout(() => {
      navigate("/points", {
        state: { userPoints: userPoints - pointsToConvert },
      });
    }, 2000);
  };
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setPointsToConvert(value);
    setError("");
    setIsInputError(false);
  };

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const moneyEquivalent = pointsToConvert * conversionRate;

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col relative">
      <header className="bg-gradient-to-r from-green-800 to-green-900 text-white text-lg font-semibold p-4 text-center">
        CONVERT POINTS TO MONEY
      </header>

      <div className="flex-grow p-6">
        <div className="mb-6">
          <h3 className="text-gray-600 font-semibold">ENTER THE AMOUNT OF POINTS YOU WANT TO CONVERT</h3>
          <input
            type="number"
            value={pointsToConvert}
            onChange={handleInputChange}
            placeholder="0"
            className={`w-full p-4 mt-2 rounded-lg shadow-sm border border-gray-300 ${isInputError ? 'border-red-600' : ''}`}
          />
        </div>

        {isInputError && <p className="text-red-600 text-center">{error}</p>}

        <div className="mb-6">
          <h3 className="text-gray-600 font-semibold">CONVERSION DETAILS</h3>
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <div className="flex justify-between">
              <p>Points Available</p>
              <p className="font-semibold text-green-800">{userPoints} Points</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Points to Convert</p>
              <p className="font-semibold">{pointsToConvert} Points</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Equivalent Money</p>
              <p className="font-semibold">₱{moneyEquivalent.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-gray-600 font-semibold">SELECT PAYMENT METHOD</h3>
          <select
            value={selectedMethod}
            onChange={handleMethodChange}
            className="w-full max-w-[250px] p-4 mt-2 py-2 rounded-lg border border-gray-300 text-base"
          >
            <option value="GCash" className="text-[14px]">GCash</option>
            <option value="PayMaya" className="text-[14px]">PayMaya</option>
          </select>
        </div>

        <p className="text-xs text-gray-500 text-center mb-6">
          Please review to ensure that the details are correct before you proceed.
        </p>

        {isConverted && (
          <div className="absolute inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-50 z-50">
            <div className="flex flex-col text-center justify-center max-w-[400px] bg-green-500 text-white p-4 rounded-md font-semibold text-sm">
              Conversion Successful! You will receive ₱{moneyEquivalent.toFixed(2)} via {selectedMethod}. Redirecting...
            </div>
          </div>
        )}

        <div className="p-4 justify-center items-center flex">
          <button
            className="w-[500px] bg-green-700 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-800 hover:shadow-md transition duration-300"
            onClick={handleConvert}
            disabled={isConverted || pointsToConvert <= 0}
          >
            {isConverted ? "Processing..." : "Convert"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConvertPoints;
