import React from "react";
import { useNavigate } from "react-router-dom";
import places from "../../public/PlacesData";

const Places = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-[#ececec] h-fit" name="places">
      <h1 className="text-3xl font-bold text-center w-full text-white h-20 flex flex-col justify-center bg-gray-800">
        Most Visited Places
      </h1>
      <div className="max-w-6xl mx-auto p-3 m-9 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {places.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all ease-in-out duration-500 mt-10 cursor-pointer"
              onClick={() => navigate(`/places/${place.id}`)}
            >
              <img src={place.img} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <p className="text-gray-600">{place.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
