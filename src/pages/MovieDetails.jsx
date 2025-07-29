import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Task 1.2 - Get Data from API
export function MovieDetails() {
  const { id } = useParams();
  // const movie = movies[id];
  const [movie, setMovie] = useState({});
  // Code

  const [isLoading, setIsLoading] = useState(true);

  async function getMovieById(id) {
    setIsLoading(true); // Start the loader
    const response = await fetch(
      `https://6402db84f61d96ac487212a6.mockapi.io/movies/${id}`
    );
    const movie = await response.json();
    setIsLoading(false); // Stop the loader
    setMovie(movie);
  }

  useEffect(() => {
    getMovieById(id); // id from URL
  }, [id]);

  const navigate = useNavigate();

  // Better UX
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="movie-detail-container">
      <button className="details-back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="WAR 2 | Official Trailer | Hrithik Roshan | NTR | Kiara Advani | Ayan Mukerji | YRF Spy Universe"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="movie-details-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>
  );
}

// Task 1.1 - /movies/0
// Screen - Movie Details of 0
// Create a <MovieDetails />

// Task 1.2 - /movies/0
// Screen - Movie Details of Vikram
