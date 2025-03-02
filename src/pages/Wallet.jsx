import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Wallet = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    name: "Andrea Mendoza",
    points: 15000,
    cardNumber: "2208 1996 4900 1234",
    transactionHistory: [
      { date: "1 Feb 2024", points: 100, type: "earned", description: "Compliance Points" },
      { date: "10 Jan 2024", points: -50, type: "penalty", description: "Smoking Violation" },
      { date: "5 Jan 2024", points: -100, type: "penalty", description: "Smoking Violation" },
      { date: "1 Jan 2024", points: -75, type: "penalty", description: "Smoking Violation" }
    ],
  });

  const { userPoints } = location.state || { userPoints: user.points };
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  const toggleAccountNumber = () => {
    setShowAccountNumber(!showAccountNumber);
  };

  const conversionRate = 0.10;
  const moneyEquivalent = userPoints * conversionRate;

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 pb-18">
      <Navbar />
      <div className="p-6 bg-gradient-to-r from-green-800 to-green-900 text-white flex justify-center shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold">Points</h2>
      </div>
      <div className="p-10 mt-2 bg-white shadow-lg overflow-auto rounded-t-xl flex flex-col mx-auto max-w-full w-full sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="mt-6 p-4 w-full max-w-md bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white rounded-2xl shadow-2xl flex flex-col mx-auto space-y-4">
          <div className="text-center">
            <span className="text-lg font-medium opacity-70">Available Points</span>
          </div>
          <h3 className="text-4xl font-extrabold mb-4 text-center">{userPoints}</h3>
          <p className="text-lg font-medium text-center">
            Equivalent Cash: ₱{moneyEquivalent.toFixed(2)}
          </p>
          <div className="text-center">
            <p className="text-xl font-semibold">{user.name}</p>
            {showAccountNumber ? (
              <p className="text-sm text-gray-300 mt-1 tracking-wide">{user.cardNumber}</p>
            ) : (
              <p className="text-sm text-gray-300 mt-1 tracking-wide">**** **** **** ****</p>
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="text-sm font-semibold text-green-200 hover:text-green-400 cursor-pointer transition duration-300"
              onClick={() => navigate("/convert-points", { state: { userPoints } })}
            >
              Convert to Money
            </button>
            <button
              className="text-sm font-semibold text-green-200 hover:text-green-400 transition duration-300"
              onClick={toggleAccountNumber}
            >
              {showAccountNumber ? 'Hide Details' : 'View Details'}
            </button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Transaction History</h3>
          <div className="mt-4 space-y-4">
            {user.transactionHistory.map((transaction, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-between p-4 rounded-lg shadow-sm cursor-pointer transition duration-300 ${transaction.type === "earned" ? "bg-green-50" : "bg-red-50"}`}
              >
                <div className="flex flex-col">
                  <h4 className={`text-lg font-medium ${transaction.type === "earned" ? "text-green-600" : "text-red-600"}`}>{transaction.description}</h4>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p className={`text-lg font-semibold ${transaction.type === "earned" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "earned" ? `+${Math.abs(transaction.points)}` : `${transaction.points}`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
