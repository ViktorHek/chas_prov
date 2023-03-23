// 3. input och knapp i en komponent med redux. 3p
// Skapa en komponent: InputAndButtonRedux som innehåller ett text-fält och en knapp.
// När man klickar på knappen ska det man skrev sparas i Redux och
// visas i en div i App.jsx.
import { useDispatch } from "react-redux";
import { useState } from "react";
function InputAndButtonRedux() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  function handleInput(event) {
    event.preventDefault();
    console.log(event.target.value);
    setInput(event.target.value);
  }
  function handleClick() {
    dispatch({type: "SET_TEXT", payload: input})
  }
  return (
    <div>
      <input onChange={(event) => handleInput(event)} />
      <button onClick={() => handleClick(input)}>click</button>
    </div>
  );
}

export default InputAndButtonRedux;
