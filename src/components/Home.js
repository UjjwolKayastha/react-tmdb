import React, { useState, useEffect } from "react";

//API
import API from "../API";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Components

//Hook
import useHomeFetch from "../hooks/useHomeFetch";

//Image
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner/index";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();
  console.log(state);

  if (error)
    return (
        <h1 style={{color: "var(--darkGrey)", textAlign: "center"}}>Something went wrong..</h1>
    );
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
        
      <Grid
        header={searchTerm ? `Results for: ${searchTerm}` : "Popular Movies"}
      >
        {state.results.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button
          text="Load More"
          callback={() => {
            setIsLoadingMore(true);
          }}
        />
      )}
    </>
  );
};

export default Home;
