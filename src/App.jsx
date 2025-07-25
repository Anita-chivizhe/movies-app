import { Link, Route, Routes } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieList } from "./pages/MovieList";
import { UserList } from "./pages/UserList";
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
            <Link to="/movies">Movies </Link>
          </li>
          <li>
            <Link to="/color-game">Color Game </Link>
          </li>
          <li>
            <Link to="/users">Users </Link>
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
        </ul>
      </nav>

      {/* Routing Setup */}
      <Routes>
        <Route path="movies" element={<MovieList />} />
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
