 const PointsHistoryItem = ({ title, points, date }) => {
    return (
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
        <div className="flex flex-col">
          <h4 className="text-lg font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <p className="text-lg font-semibold text-blue-600">{points} Points</p>
      </div>
    );
  };
  
  export default PointsHistoryItem;
  