import React from 'react';
import Img from '../assets/img/detect.png';

const Detect = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-300 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white w-full h-[150px] sm:h-[80px] flex flex-col justify-center items-center shadow-lg mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Important Notice</h1>
        <p className="text-sm sm:text-base text-center">For the health and safety of others, please be mindful of your surroundings.</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center px-4 sm:px-8 text-center mb-8">
        <img src={Img} className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] mb-6 rounded-lg shadow-xl" alt="Warning" />
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">Caution: Nearby Sensitive Areas</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            There is a high concentration of children and vulnerable individuals in the vicinity of your current location. 
            For their safety and well-being, we kindly ask that you refrain from smoking or using any nicotine products 
            in this area. Your cooperation is greatly appreciated in maintaining a safe environment for everyone.
          </p>
          <p className="text-sm sm:text-base text-gray-500 italic">Thank you for your understanding and responsibility.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center items-center mt-2 space-x-4 pb-10">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
        <button
          className="bg-transparent border-2 border-green-600 hover:bg-green-100 text-green-600 font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
          onClick={() => window.location.href = '/'}
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default Detect;
