import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [headerData, setHeaderData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    fetchHeaderData();
  }, []);

  //dataları moviesection componentine getirmek için
  async function fetchMovies() {
    const movieData = [];
    const Imdbid = [
      "tt14859416",
      "tt16419074",
      "tt0386676",
      "tt10366206",
      "tt0120737",
      "tt0109830",
      "tt0137523",
      "tt0133093",
      "tt0468569",
      "tt1675434",
      "tt0482571",
      "tt5971474",
      "tt0816692",
      "tt21909844",
      "tt8080204",
      "tt4633694",
      "tt5788792",
      "tt5433140",
      "tt13521006",
      "tt0439572",
    ];
    for (let i = 0; i < Imdbid.length; i++) {
      try {
        const response = await axios.get(
          "http://omdbapi.com/?i=" + Imdbid[i] + "&type=movie&apikey=e252e25f"
        );
        movieData.push(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    setMovies(movieData);
  }

  //header kısmına bir adet data getirmek için

  async function fetchHeaderData() {
    try {
      const response = await axios.get(
        "http://omdbapi.com/?i=tt1675434&type=movie&apikey=e252e25f"
      );
      setHeaderData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // favori kısmını düzenlemek için
  const changeFavoriteValue = (id) => {
    const moviesId = localStorage.getItem("moviesId");
    const moviesIdParse = JSON.parse(moviesId);
    const checkExisting = moviesIdParse?.find((item, index) => {
      return item.imdbID === id;
    });
    if (checkExisting) {
      const filtered = moviesIdParse.filter((item) => {
        return item.imdbID !== id;
      });
      localStorage.setItem("moviesId", JSON.stringify(filtered));
      setFavorite(filtered);
      return;
    } else {
      if (moviesId === null) {
        localStorage.setItem("moviesId", JSON.stringify([{ imdbID: id }]));
      } else {
        localStorage.setItem(
          "moviesId",
          JSON.stringify([...moviesIdParse, { imdbID: id }])
        );
      }
      setFavorite([moviesIdParse, { imdbID: id }]);
    }
  };

  useEffect(() => {
    const moviesId = localStorage.getItem("moviesId");
    console.log("moviesId", moviesId);
    /*//remove localstorage
		 localStorage.removeItem("moviesId");
		localStorage.clear(); */
  }, [favorite]);

  const CheckFavorite = (id) => {
    const moviesId = localStorage.getItem("moviesId");
    const moviesIdParse = JSON.parse(moviesId);
    const checkExisting = moviesIdParse?.find((item, index) => {
      return item.imdbID === id;
    });

    if (checkExisting) {
      return <MdOutlineFavorite />;
    } else {
      return <MdOutlineFavoriteBorder />;
    }
  };

  //Search işlemi için

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = searchTerm
    ? movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;

  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        headerData,
        favorite,
        handleSearch,
        filteredMovies,
        changeFavoriteValue,
        CheckFavorite,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const MovieContext = () => {
  return useContext(Context);
};
