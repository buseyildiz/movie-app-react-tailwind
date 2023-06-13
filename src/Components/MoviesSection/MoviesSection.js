import React, { useState } from "react";
import { MovieContext } from "../../Context/Context";
import Modal from "react-modal";

function MoviesSection() {
  const { changeFavoriteValue, CheckFavorite, filteredMovies } = MovieContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showMovieDetails = (selectedMovie) => {
    setModalContent(selectedMovie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <div className="py-24 bg-black">
        <div className="container flex flex-wrap">
          {filteredMovies.map((movie) => (
            <div
              className="group relative overflow-hidden basis-1/4 md:basis-1/5"
              onClick={() => showMovieDetails(movie)}
            >
              <img
                src={movie.Poster}
                alt="movie"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-3 md:px-6 bottom-4 md:bottom-8">
                <h3 className="text-sm md:text-xl font-gemunu uppercase text-my-grey group-hover:text-my-yellow md:group-hover:mb-2 duration-500">
                  {movie.Title}
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100  group-hover:mb-10 text-my-grey duration-500">
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
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Film Detayları"
          className="w-1/2"
          contentClassName="flex justify-center items-center"
        >
          {modalContent && (
            <div className="bg-black p-4  rounded-lg shadow-md flex ">
              <div>
                <img src={modalContent.Poster} alt="movie" className="w-44" />
                <h2 className="text-lg font-bold mb-2 text-my-red">
                  {modalContent.Title}
                </h2>
                <p className="text-sm mb-4">{modalContent.Genre}</p>
                {/* Diğer detaylar */}
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={closeModal}
                >
                  Kapat
                </button>
              </div>
              <div className="text-my-grey ml-8 ">
                <p className="mb-4">{modalContent.Plot}</p>
                <p>Genre : {modalContent.Genre}</p>
                <p>Director : {modalContent.Director}</p>
                <p>Year : {modalContent.Year}</p>
                <p>Imdb : {modalContent.imdbRating}</p>
                <p>Actors : {modalContent.Actors}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}

export default MoviesSection;
