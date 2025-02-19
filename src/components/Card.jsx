import React from 'react';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4 sm:p-6 transform hover:scale-105">
      <a href={link} className="block overflow-hidden rounded-lg">
        <img
          className="w-full h-48 sm:h-56 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg mb-4 md:mb-0"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-3 sm:p-5 flex flex-col justify-between">
        <a href={link}>
          <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 hover:text-green-600 transition-colors duration-200">
            {title}
          </h5>
        </a>
        <p className="mb-4 text-sm sm:text-base text-gray-700 flex-grow min-h-[100px]">
          {description || "No description available."}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 transition duration-300"
        >
          Read more
          <svg
            className="w-4 h-4 ml-2 transform transition-transform duration-200 hover:translate-x-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
