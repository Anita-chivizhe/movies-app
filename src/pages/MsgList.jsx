import { Msg } from "../components/Msg";

export function MsgList() {
  const names = ["Jeevan", "Ethan", "Siya", "Jamie"];
  return (
    <div>
      {names.map((nm, index) => (
        <Msg key={index} name={nm} />
      ))}
    </div>
  );
}
