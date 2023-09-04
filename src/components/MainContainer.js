import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  if (!movies) return;

  //Basically there are 20 movies in our list we want only the first movie title and background to display
  //I will use movies[1] bcoz it's trailer is good or else you keep movies[0]
  const mainMovie = movies[9];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
