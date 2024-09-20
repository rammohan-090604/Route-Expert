import React from 'react';

const ReviewsCard = ({ image, rating, name, description }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.604-.921 1.904 0l1.671 5.124a1 1 0 00.95.69h5.375c.969 0 1.371 1.24.588 1.81l-4.352 3.17a1 1 0 00-.36 1.118l1.671 5.124c.3.921-.755 1.688-1.54 1.118l-4.352-3.17a1 1 0 00-1.176 0l-4.352 3.17c-.785.57-1.839-.197-1.54-1.118l1.671-5.124a1 1 0 00-.36-1.118l-4.352-3.17c-.783-.57-.381-1.81.588-1.81h5.375a1 1 0 00.95-.69l1.671-5.124z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <div className="flex space-x-1 mb-2">{renderStars(rating)}</div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
