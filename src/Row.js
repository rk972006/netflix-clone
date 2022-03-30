import React, { useEffect, useState } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // a sinpeet of code which runs in specific condition/varaible
  useEffect(() => {
    // if [] run once the row load then dont run again
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`"

      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);
  console.log(movies);
  // state = short term memory when we refresh it removes
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  );
}
export default Row;
