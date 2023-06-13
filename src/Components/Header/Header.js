import React from "react";
import { MovieContext } from "../../Context/Context";

function Header() {
  const { handleSearch, searchTerm } = MovieContext();

  return (
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
            <a href="#" className="hover:text-my-red">
              Movies
            </a>
            <a href="/favorite" className="hover:text-my-red whitespace-nowrap">
              My Favorite
            </a>
          </div>
        </nav>
        <form>
          <div className="group border-r px-4 mx-4 py-1 border-my-red">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="bg-transparent opacity-0 group-hover:opacity-100 transition duration-500 border-b border-my-red  focus:outline-none w-24 lg:w-44"
            />
            <button className="-ml-4 group-hover:ml-0 group-hover:text-xl ">
              <i className="fas fa-search " />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
