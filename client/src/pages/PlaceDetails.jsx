import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import places from "../../public/PlacesData";

const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find((p) => p.id === parseInt(id));

  if (!place) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-semibold text-red-500 dark:text-red-400">
          🚫 Place Not Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden transition duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] animate-fadeIn">
        {/* Parallax Image Section */}
        <div className="relative group">
          <img
            src={place.img}
            alt={place.name}
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-5">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
              {place.name}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 flex justify-center items-center gap-2">
            📍 <span className="font-semibold">{place.location}</span>
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
            {place.description}
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-center pb-8">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-red-300 to-gray-400 text-white rounded-full shadow-xl transition duration-300 transform hover:scale-110 hover:shadow-2xl focus:ring focus:ring-purple-300 active:scale-95"
          >
            ← Back to Places
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
