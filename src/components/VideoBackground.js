import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //making trailer dynamic, we get trailer from my redux store we use useSelector
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);

  useMovieTrailer(movieId);

  return (
    <div>
      {/*We get this iframe from youtube embed */}
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
