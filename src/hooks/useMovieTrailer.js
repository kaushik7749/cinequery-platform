import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer video and updating my redux store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    //we are filtering the video which has type "Trailer" in that video id json
    const filterData = json.results.filter((video) => video.type == "Trailer");
    //below line gives us first trailer video or if the filterData has empty list then it will give me the any first video from th results array which is present in json
    const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
