import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const MovieDetails = () => {
  const movieData = useLoaderData();
  const {  Poster, Title, Type, } =
    movieData;

  return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <div className="poster-container">
          <NavLink to="#">
            <img src={Poster} className="poster" alt={Title} />
          </NavLink>
        </div>

        <div className="ticket-container">
          <div className="ticket_content">
            <h4 className="ticket_movie-title">{Title}</h4>
            

            <p className="ticket_current-price">
              Type:
              <span>{Type}</span>
            </p>


            <button className="ticket_buy-btn">Watch now</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieDetails;
