import React from "react";
import { ContextProvider, MovieContext } from "./Context/Context";

function Favorite() {
  const { favorite, CheckFavorite, changeFavoriteValue } = MovieContext();

  return (
    <ContextProvider>
      <>
        <div className="bg-black py-6 lg:py-12 text-my-grey uppercase font-gemunu ">
          <div className="flex items-center container justify-between space-x-6 lg:space-x-16 ">
            <a
              href="#"
              className="text-3xl pl-4 md:pl-0 md:text-6xl transition duration-500 font-bold text-my-grey hover:text-transparent bg-gradient-to-r bg-clip-text from-my-red to-my-grey"
            >
              Cinegram
            </a>
            <nav className="hidden md:flex justify-between flex-1">
              <div className="flex items-center lg:text-xl space-x-4 lg:space-x-8 ">
                <a href="/" className="hover:text-my-red">
                  Movies
                </a>
                <a
                  href="/favorite"
                  className="hover:text-my-red whitespace-nowrap"
                >
                  My Favorite
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="py-24 bg-black">
          <div className="container flex flex-wrap">
            {favorite.map((movie) => (
              <div className="group relative overflow-hidden basis-1/5">
                <img
                  src={movie.Poster}
                  alt="movie"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                <div className="absolute px-6 bottom-8">
                  <h3 className="font-gemunu uppercase text-my-grey group-hover:text-my-yellow group-hover:mb-2 duration-500">
                    {movie.Title}
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 text-my-grey duration-500">
                    {movie.Genre}
                  </p>
                  <div className="absolute text-my-grey opacity-0 -bottom-4 group-hover:bottom-2 group-hover:opacity-100 duration-500 ">
                    <button
                      className="hover:text-my-red text-2xl"
                      onClick={() => changeFavoriteValue(movie.imdbID)}
                    >
                      {CheckFavorite(movie.imdbID)}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </ContextProvider>
  );
}

export default Favorite;
