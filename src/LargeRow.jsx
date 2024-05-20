import axios from "./axios";
import { useEffect } from "react";
import { useState } from "react";
import "./largeRow.css";

const base_url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);

      // const data = request.json();
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchurl]);

  return (
    <div className="row_first">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
