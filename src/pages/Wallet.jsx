import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Wallet = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 pb-18">
      <Navbar />

      {/* Wallet Balance Section */}
      <div className="p-6 bg-gradient-to-r from-green-800 to-green-900 text-white flex justify-center shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold">Wallet Overview</h2>
      </div>

      {/* Wrapper Card for everything with rounded top */}
      <div className="p-10 mt-2 bg-white shadow-lg overflow-auto rounded-t-xl flex flex-col mx-auto max-w-full w-full sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Wallet Balance Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Wallet Balance</h2>
          <MdDownload className="text-2xl cursor-pointer hover:text-green-500 transition duration-300" />
        </div>

        {/* Wallet Balance Card */}
        <div className="mt-4 p-6 w-full max-w-md bg-gradient-to-r from-green-800 to-green-900 text-white rounded-xl shadow-lg flex flex-col mx-auto">
          <h3 className="text-3xl font-extrabold mb-4">$7,409,332</h3>
          <p className="text-lg font-medium">Andrea Mendoza</p>
          <p className="tracking-wider text-sm opacity-80">2208 1996 4900</p>
        </div>

        {/* Latest Transactions */}
        <div className="flex items-center justify-between mt-6">
          <h3 className="text-lg font-semibold">Latest Transactions</h3>
          <button className="text-green-600 hover:text-green-800 transition duration-300">View All</button>
        </div>

        {/* Transaction Items */}
        <div className="mt-4 space-y-4">
          <TransactionItem title="Angga Big Park" time="10 hours ago" amount="$49,509" date="12 Jan 2024" />
          <TransactionItem title="Top Up" time="-" amount="$43,129,509" date="12 Jan 2024" />
          <TransactionItem title="Angga Big Park" time="10 hours ago" amount="$49,509" date="12 Jan 2024" />
        </div>

        {/* Penalty History */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Penalty History</h3>
          <div className="mt-4 space-y-4">
            <PenaltyItem title="Late Payment Fee" date="10 Jan 2024" amount="$50" navigate={navigate} />
            <PenaltyItem title="Smoking Violation" date="5 Jan 2024" amount="$100" navigate={navigate} />
            <PenaltyItem title="Overdue Fine" date="1 Jan 2024" amount="$75" navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Transaction Item Component
const TransactionItem = ({ title, time, amount, date }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <div className="flex flex-col">
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{time} • {date}</p>
      </div>
      <p className="text-lg font-semibold text-green-600">{amount}</p>
    </div>
  );
};

// Penalty Item Component
const PenaltyItem = ({ title, date, amount, navigate }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 hover:shadow-md transition duration-300"
      onClick={() => navigate("/payment")}
    >
      <div className="flex flex-col">
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <p className="text-lg font-semibold text-red-600">{amount}</p>
    </motion.div>
  );
};

export default Wallet;
