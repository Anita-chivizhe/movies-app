import { useState } from "react";
import { useNavigate } from "react-router";

// /movies/new - AddMovie
export function AddMovie() {
  // input box - variable
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

  const addMovie = async (event) => {
    event.preventDefault(); // Prevent Refesh Behaviour

    // setColors([...colors, color]);
    console.log("addMovie", name, poster);

    // Object Short hand
    const newMovie = {
      name,
      poster,
      summary,
      rating: +rating,
      trailer,
    };

    // // Copy the existing movies + New movie
    // setMovies([...movies, newMovie]);
    // API Call

    // POST
    // 1. method - POST
    // 2. Body - data (JSON)
    // 3. Header - JSON - (Inform to the backend JSON data)

    const response = await fetch(
      "https://6402db84f61d96ac487212a6.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    // Programmatically
    navigate("/movies"); // +1 -> go forward, -1 -> go back
  };

  return (
    <form onSubmit={addMovie} className="movie-form-container">
      <input
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder="Poster"
      />

      <input
        onChange={(event) => setRating(event.target.value)}
        type="text"
        placeholder="Rating"
      />

      <input
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="Summary"
      />

      <input
        onChange={(event) => setTrailer(event.target.value)}
        type="text"
        placeholder="Trailer"
      />

      {/* Task 1.2 Add Box to the List */}
      <button type="submit">➕ Add</button>
    </form>
  );
}

// /movies/99/edit - Edit Page
