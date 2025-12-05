import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>Digital Clock in React JS</h1>

      <select onChange={(e) => setColor(e.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
        <option value={"gray"}>Gray</option>
        <option value={"brown"}>Brown</option>
        <option value={"pink"}>Pink</option>
      </select>

      <Clock color={color} />
    </div>
  );
}

export default App;
