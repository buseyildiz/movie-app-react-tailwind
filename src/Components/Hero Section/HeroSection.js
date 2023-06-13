import React from "react";
import { MovieContext } from "../../Context/Context";
import myImage from "../../images/theIntouchables.jpg";

function HeroSection() {
  const { headerData } = MovieContext();

  return (
    <>
      <div className="h-64 md:h-96 lg:h-128 group relative ">
        <img src={myImage} alt="main" className="w-full h-full object-cover " />

        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
          <div className="container pl-10 lg:pl-0">
            <h3 className="text-my-red tracking-wider uppercase group-hover:mb-1duration-500 font-gemunu">
              {headerData.Genre}
            </h3>
            <h1 className="text-4xl lg:text-6xl text-black font-gemunu uppercase group-hover:mb-1 duration-500">
              {headerData.Title}
            </h1>
            <p className="text-my-grey group-hover:mb-2 duration-500 w-3/4 lg:w-2/3 text-sm lg:text-base">
              {headerData.Plot}
            </p>
            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000 items-center cursor-pointer">
              <p className="text-my-grey uppercase lg:text-md hover:text-my-red duration-1000">
                {headerData.Director}
              </p>
              <p className="text-my-grey uppercase lg:text-md hover:text-my-red duration-1000">
                {headerData.Year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
