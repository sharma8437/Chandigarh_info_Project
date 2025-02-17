import React from "react";

const placesData = [
  {
    id: 1,
    title: "Chandigarh",
    description: "The City Beautiful with amazing gardens and architecture.",
    image: "https://source.unsplash.com/300x200/?chandigarh",
  },
  {
    id: 2,
    title: "Shimla",
    description: "A beautiful hill station with scenic mountains and snowfall.",
    image: "https://source.unsplash.com/300x200/?shimla",
  },
  {
    id: 3,
    title: "Manali",
    description: "Famous for adventure sports and breathtaking views.",
    image: "https://source.unsplash.com/300x200/?manali",
  },
  {
    id: 4,
    title: "Jaipur",
    description: "The Pink City known for its royal palaces and culture.",
    image: "https://source.unsplash.com/300x200/?jaipur",
  },
  {
    id: 5,
    title: "Goa",
    description: "Beaches, parties, and vibrant nightlife await you in Goa.",
    image: "https://source.unsplash.com/300x200/?goa",
  },
  {
    id: 6,
    title: "Agra",
    description: "Home to the iconic Taj Mahal, a wonder of the world.",
    image: "https://source.unsplash.com/300x200/?agra",
  },
  {
    id: 7,
    title: "Varanasi",
    description: "A spiritual hub on the banks of the Ganges River.",
    image: "https://source.unsplash.com/300x200/?varanasi",
  },
  {
    id: 8,
    title: "Mumbai",
    description: "The city of dreams, Bollywood, and stunning sea views.",
    image: "https://source.unsplash.com/300x200/?mumbai",
  },
];

const Places = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placesData.map((place) => (
          <div key={place.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={place.image} alt={place.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{place.title}</h3>
              <p className="text-gray-600">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
