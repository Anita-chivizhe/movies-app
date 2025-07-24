import { useState } from "react";
import { ColorBox } from "./ColorBox";

// State Changes -> Update UI (useState)
// Typing event -> Listens -> onChange, onInput, onKeyPress
// onChange -> Works Text, Checkbox, Radio, etc
// event.target -> Where event originate from
// C = f(S) | State Changes Component re-renders
export function ColorGame() {
  const [color, setColor] = useState("");

  // Clue: Inline Style
  const styles = {
    background: color,
    fontSize: "24px",
  };

  // Task 1.1 - List these colors using ColorBox - map
  const [colors, setColors] = useState(["pink", "orange", "purple", "crimson"]);
  // console.log("Re-rendered");
  const addColor = (event) => {
    event.preventDefault(); // Prevent Refesh Behaviour
    setColors([...colors, color]);
  };

  return (
    <div>
      {/* Copy the existing colors + New color */}
      <form onSubmit={addColor} className="color-form-container">
        <input
          style={styles}
          onChange={(event) => setColor(event.target.value)}
          type="text"
          placeholder="Your fav color.."
        />
        {/* Task 1.2 Add Box to the List */}
        <button type="submit">➕ Add</button>
      </form>

      {/* Dictate from Parent the UI */}
      <div className="color-box-list-container">
        {colors.map((clr) => (
          <ColorBox clr={clr} />
        ))}
      </div>
    </div>
  );
}
