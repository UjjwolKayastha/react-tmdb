import React from "react";
import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import BreadCrumb from "./BreadCrumb";
import Spinner from "./Spinner/index";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";

//Hook
import useMovieFetch from "../hooks/useMovieFetch";

//Image

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

    console.log(movie.spoken_languages?.map(k=> k.name).length)

  if (loading) return <Spinner />;
  if (error)
    return (
      <h1 style={{ color: "var(--darkGrey)", textAlign: "center" }}>
        Something went wrong..
      </h1>
    );
    console.log(movie)
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
        language={movie.spoken_languages?.map(k=> k.name)?.join(", ")}
      />
    </>
  );

  
};

export default Movie;
