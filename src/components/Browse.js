import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useNowPopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
