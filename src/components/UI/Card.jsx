import React from "react";
import './Card.css'
const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;
  return (
    <>
      <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={Poster} className="poster" alt={imdbID} />
          </div>
          <div className="button-container">
          <button className="ticket__buy-btn">Watch Now</button>
        </div>
        </div>
      </li>
    </>
  );
};

export default Card;
