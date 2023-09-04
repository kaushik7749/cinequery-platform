import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  //Only render this list if my movies list is present
  return (
    movies.addNowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 pl-12 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.addNowPlayingMovies}
          />
          <MovieList title={"Popular"} movies={movies.addPopularMovies} />
          <MovieList title={"Trending"} movies={movies.addNowPlayingMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.addNowPlayingMovies}
          />

          {/*

    MovieList - Popular
      -MovieCard*n(rows)
    MovieList - New Trending
    MovieList - Trending
    MovieList - Horror

    */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
