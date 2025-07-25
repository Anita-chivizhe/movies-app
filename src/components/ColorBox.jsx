// Pass data from Parent -> Child (Prop)

export function ColorBox({ clr }) {
  const styles = {
    background: clr,
    height: "25px",
    width: "250px",
  };

  return <div style={styles}></div>;
}
