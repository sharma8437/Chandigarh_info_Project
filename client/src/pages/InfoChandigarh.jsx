import React from "react";
import chd from "../assets/chd.jpg"

const InfoChandigarh = () => {
  return (
    <div 
    name="info"
    className="w-full  relative top-0">

   
    <div className="bg-[#0e0d40] text-black min-h-screen">
    
      <div
        className="relative h-[20vh] flex items-center justify-center bg-cover bg-center bg-base-200"
        
      >
        <div className="absolute inset-0"></div>
        <div className="relative text-center px-6 ">
          <h1 className="text-2xl md:text-4xl lg:text-[44px] font-bold ">Chandigarh - The City Beautiful</h1>
          <p className="text-lg mt-3 text-gray-900">
            A perfect blend of modern architecture, culture, and nature.
          </p>
        </div>
      </div>

   
      <div className="max-w-6xl mx-auto p-8 space-y-16">
       
        <section>
          <h2 className="text-4xl font-semibold mb-4 text-center text-white">History of Chandigarh</h2>
          <p className="text-lg text-gray-300 text-center">
            Chandigarh, India's first planned city, was designed by the renowned architect{" "}
            <strong>Le Corbusier</strong> in the 1950s. Built as a symbol of progress, it serves as 
            the capital of both Punjab and Haryana, boasting a structured layout, wide roads, and lush greenery.
          </p>
        </section>

       
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-3 text-gray-200">Architectural Marvels</h3>
            <p className="text-lg text-gray-300">
              Chandigarh is home to stunning modernist structures like:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-3">
              <li>The Capitol Complex (a UNESCO World Heritage Site)</li>
              <li>The Open Hand Monument</li>
              <li>Rock Garden (created from industrial waste)</li>
              <li>Chandigarh High Court</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={chd}
              alt="Capitol Complex"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

     
        <section className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/b8/f7/e3/b8f7e3efd3386de8d1cfb6c73af2f1e2.jpg"
              alt="Chandigarh Culture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-3 text-gray-200">Culture & Lifestyle</h3>
            <p className="text-lg text-gray-300">
              The city offers a mix of tradition and modernity. Experience:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-3">
              <li>Punjabi cuisine – Butter Chicken, Amritsari Kulcha, Lassi</li>
              <li>Festivals – Baisakhi, Lohri, Chandigarh Carnival</li>
              <li>Vibrant nightlife & shopping at Elante Mall</li>
              <li>Peaceful Sukhna Lake for morning walks</li>
            </ul>
          </div>
        </section>

    
        <section className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-gray-200">Why Chandigarh?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Chandigarh is a symbol of India's **progressive vision**, blending **sustainability**, 
            **urban planning**, and **quality living**. With its well-maintained roads, pollution-free 
            environment, and rich cultural heritage, it remains one of the **best cities to live in India**.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition">
            Explore More About Chandigarh
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InfoChandigarh;
