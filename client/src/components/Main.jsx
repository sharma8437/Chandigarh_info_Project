import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hill from "../assets/hill.jpg";
import chdHero from "../assets/ChdHero.jpg";
import lake from "../assets/lake.jpg";
import japness from "../assets/japness.jpg";
import chd from "../assets/chd.jpg";

import { Link } from "react-router-dom";

function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="overflow-hidden  h-[560px] " name="home">
      <div className="slider-container relative top-16 ">
        <Slider {...settings}>
          {[hill, chdHero, lake, chd, japness].map((image, index) => (
            <div key={index} className="relative w-full h-[500px]">
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover  "
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 same z-50 ">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Welcome to Chandigarh Info Services
                </h1>
                <p className="lg:text-lg mt-2 text-gray-100 sm:text-sm">
                  Chandigarh, the capital of the northern Indian states of
                  Punjab and Haryana, was designed by the Swiss-French modernist
                  architect, Le Corbusier. His buildings include the Capitol
                  Complex with its High Court, Secretariat and Legislative
                  Assembly, as well as the giant Open Hand Monument. The nearby
                  Rock Garden is a park featuring sculptures made of stones,
                  recycled ceramics and industrial relics.
                </p>

                <Link to="/login">
                  <button className="bg-red-500 w-36 h-12 rounded-sm mt-7 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Main;
