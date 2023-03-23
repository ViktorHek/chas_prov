import { useState } from "react";

function InputAndButton({handleClick}) {
  const [input, setInput] = useState("")
  function handleInput(event) {
    event.preventDefault()
    console.log(event.target.value)
    setInput(event.target.value)
  }

  return (
    <div>
      <input onChange={(event) => handleInput(event)} />
      <button onClick={() => handleClick(input)}>click</button>
    </div>
  );
}

export default InputAndButton;
