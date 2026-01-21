import React from "react";
import { useRouteError, NavLink, useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  const handleGoBack = () => {
    navigate(-1);
    // navigate("/");
  };

  const errorStatus = error?.status || 500;
  const errorMessage =
    errorStatus === 404
      ? "Oops! The page you are looking for does not exist."
      : "Something went wrong! Please try again later.";

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">{errorStatus}</h1>
        <p className="error-message">{errorMessage}</p>
        {/* <NavLink to="/" className="error-home-btn">
          Go Back Home
        </NavLink> */}
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
