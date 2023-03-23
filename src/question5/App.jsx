// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.
import { useEffect, useState } from "react";
function App() {
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    populate();
  }, []);

  function populate() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserArr(data));
  }

  let displayImgArr = userArr.map((el) => {
    console.log(el);
    return (
      <span className="card-container">
        {el.name} {el.email} {el.city}
      </span>
    );
  });
  return <div className="user-container">{displayImgArr && displayImgArr}</div>;
}

export default App;
