import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/UI/Card";

const Movie = () => {
  const movieData = useLoaderData();

  return (
    <>
      <ul className="container grid grid-four--cols">
        {movieData &&
          movieData.Search.map((curMovie) => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />;
          })}
      </ul>
    </>
  );
};

export default Movie;
