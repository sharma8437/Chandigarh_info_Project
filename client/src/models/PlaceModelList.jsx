import React from "react";

const PlaceModelList = () => {
  return (
    <div className=" ">
  
      

      {/* Modal (Appears on Hover) */}
      <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-2 ">
      
        <ul className="space-y-2 text-gray-700">
          <li className="p-2 bg-gray-100 rounded-md text-sm"> Rose Garden</li>
          <li className="p-2 bg-gray-100 rounded-md text-sm"> Rock Garden</li>
          <li className="p-2 bg-gray-100 rounded-md text-sm"> Sukhna Lake</li>
          <li className="p-2 bg-gray-100 rounded-md text-sm"> Laiser Velly</li>
        </ul>
      </div>
    </div>
  );
};

export default PlaceModelList;
