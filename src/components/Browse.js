import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          MainContainer
            -VideoBackground
            -VideoTitle
          SecondaryContainer
            -MovieList * n(rows)
              -cards * n
      */}
    </div>
  );
};

export default Browse;
