import { Link, Navigate, Route, Routes } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieList } from "./pages/MovieList";
import { UserList } from "./pages/UserList";
import { NotFound } from "./pages/NotFound";
import "./styles.css";

// Component = UI + Logic
// Default Export
export default function App() {
  console.log("Hi");
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/movies">Movies </Link>
          </li>
          <li>
            <Link to="/color-game">Color Game </Link>
          </li>
          <li>
            <Link to="/users">Users </Link>
          </li>
        </ul>
      </nav>

      {/* Routing Setup */}
      <Routes>
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="/" element={<Home />} />
        {/* Redirect - /home -> /  */}
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        {/* Catch all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
