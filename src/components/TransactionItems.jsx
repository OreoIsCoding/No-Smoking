const TransactionItem = ({ title, time, points, date, sender }) => {
    return (
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
        <div className="flex flex-col">
          <h4 className="text-lg font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{time} • {date}</p>
          <p className="text-sm text-gray-500">{`From: ${sender}`}</p> {/* Display sender */}
        </div>
        <p className="text-lg font-semibold text-blue-600">{points} Points</p> {/* Display points */}
      </div>
    );
  };
  
  export default TransactionItem;
  