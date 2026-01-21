import React from "react";

export const getMoviesData = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=d0a07b20&s=titanic&page=1",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
