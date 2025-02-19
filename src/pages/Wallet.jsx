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
      <div className="p-6 bg-gradient-to-r from-green-400 to-green-600 text-white flex justify-center shadow-lg">
      </div>
      
      {/* Wrapper Card for everything with rounded top */}
      <div className="p-6 bg-white shadow-lg overflow-auto rounded-t-xl flex flex-col mx-auto max-w-full w-full sm:max-w-full md:max-w-full lg:max-w-full">
        {/* Wallet Balance Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Wallet Balance</h2>
          <MdDownload className="text-2xl cursor-pointer hover:text-green-500 transition duration-300" />
        </div>
        
        {/* Wallet Balance Card */}
        <div className="mt-4 p-6 w-[350px] bg-green-400 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg flex flex-col mx-auto max-w-full md:max-w-full">
          <h3 className="text-3xl font-extrabold text-neutral-700 text-left mb-4">$7,409,332</h3>
          <p className="text-lg mt-2 font-medium text-neutral-600 text-left">Andrea Mendoza</p>
          <p className="tracking-wider text-gray-500 text-sm">2208 1996 4900</p>
        </div>

        {/* Latest Transactions */}
        <div className="flex items-center justify-between mt-6">
          <h3 className="text-lg font-semibold text-left">Latest Transactions</h3>
          <button className="text-green-600 hover:text-green-800 transition duration-300">View All</button>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <TransactionItem title="Angga Big Park" time="10 hours ago" amount="$49,509" date="12 Jan 2024" />
          <TransactionItem title="Top Up" time="-" amount="$43,129,509" date="12 Jan 2024" />
          <TransactionItem title="Angga Big Park" time="10 hours ago" amount="$49,509" date="12 Jan 2024" />
        </div>

        {/* Penalty History */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Penalty History</h3>
          <div className="mt-4 flex flex-col gap-4">
            <PenaltyItem title="Late Payment Fee" date="10 Jan 2024" amount="$50" navigate={navigate} />
            <PenaltyItem title="Smoking violation" date="5 Jan 2024" amount="$100" navigate={navigate} />
            <PenaltyItem title="Overdue Fine" date="1 Jan 2024" amount="$75" navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

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
