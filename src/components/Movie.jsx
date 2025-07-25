import { useState } from "react";

// Presentation
export function Movie({ movie }) {
  // Inline Style
  // Declare state variables at the top
  const [show, setShow] = useState(true);

  // Conditional Styling - Ternary Operator
  const ratingStyles = {
    // fontStyle: "italic"
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // };
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingStyles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <button onClick={() => setShow(!show)}>Toggle Summary</button>

        {/* Conditional Styling - Hidden in DOM */}
        {/* <p style={summaryStyles} className="movie-summary">
              {movie.summary}
            </p> */}

        {/* Conditional Rendering - Removes from DOM */}
        {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      </div>
    </div>
  );
}
