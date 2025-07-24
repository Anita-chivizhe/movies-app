import { Msg } from "./Msg";
export function MsgList() {
  const names = ["Jeevan", "Ethan", "Siya", "Jamie"];
  return (
    <div>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}
