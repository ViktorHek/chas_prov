// 3. input och knapp i en komponent med redux. 3p
// Skapa en komponent: InputAndButtonRedux som innehåller ett text-fält och en knapp.
// När man klickar på knappen ska det man skrev sparas i Redux och
// visas i en div i App.jsx.
import { useSelector } from "react-redux";
import InputAndButtonRedux from "./InputAndButtonRedux";
function App() {
  const { text } = useSelector((state) => state);

  return (
    <div>
      <h1>{text}</h1>
      <InputAndButtonRedux />
    </div>
  );
}

export default App;
