// 3. input och knapp i en komponent . 3p
// Skapa en komponent: InputAndButton som innehåller ett text-fält och en knapp.
// När man klickar på knappen ska det man skrev visas i en div i App.jsx.
import InputAndButton from "./InputAndButton";
import { useState } from "react";
function App() {
  const [displayText, setDisplayText] = useState("init");
  function handleClick(val) {
    setDisplayText(val);
  }
  return (
    <div>
      <span>{displayText}</span>
      <InputAndButton handleClick={handleClick} />
    </div>
  );
}

export default App;
