import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to Chandigarh Explorer! We are passionate about showcasing the
          beauty, history, and culture of Chandigarh. Our mission is to provide
          you with the best insights into the most iconic places in this
          incredible city.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Whether you're a resident or a traveler, our goal is to make your
          experience in Chandigarh more enriching by sharing detailed
          information about must-visit attractions, historical landmarks, and
          local favorites.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Stay connected with us as we explore Chandigarh together!
        </p>
      </div>
    </section>
  );
};

export default About;
