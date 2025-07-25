import { Counter } from "./Counter";

export function User({ name = "Unknown", pic }) {
  return (
    <div>
      <img className="user-pic" src={pic} alt={name + " profile pic"} />
      <p className="user-name-container">
        Hello, <span>{name}</span>🎉🎉
      </p>
      <Counter />
    </div>
  );
}
