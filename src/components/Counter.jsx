import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(10);
  const [disLike, setDisLike] = useState(10);
  console.log("Re-rendered...");

  // Task: Dislike button - Youtube
  return (
    <div className="counter-container">
      <button aria-label="like button" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>

      <button
        aria-label="dislike button"
        onClick={() => setDisLike(disLike + 1)}
      >
        👎 {disLike}
      </button>
    </div>
  );
}
