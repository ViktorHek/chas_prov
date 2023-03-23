// 6. React router med todo-items 4p
// Visa på sidan: Titeln på alla todo-items från detta api: https://jsonplaceholder.typicode.com/todos/
//
// Varje titel ska vara en länk. När man klickar på länken ska man komma till en sida där det
// enbart står Done eller Not done beroende på om todo-item är completed eller inte.
import { useEffect, useState } from "react";
function App() {
  const [arr, setArr] = useState([]);
  const [ref, setRef] = useState("");

  useEffect(() => {
    let url = window.location.href.split("localhost")[1].split("/")[1];
    setRef(url);
    populate(url);
  }, []);

  function populate(ref) {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        if (ref) {
          let arrWithSingleObj = [];
          arrWithSingleObj.push(data[parseInt(ref) - 1]);
          setArr(arrWithSingleObj);
        } else {
          setArr(data);
        }
      });
  }

  const displayArr = arr.map((el) => {
    console.log({ el });
    if (ref) {
      return <div>{el.completed ? "Done" : "Not-Done"}</div>;
    } else {
      return (
        <div key={el.id}>
          <a href={`${ref}/${el.id}`}>{el.title}</a>
        </div>
      );
    }
  });

  return (
    <div>
      <h1>quest 6</h1>
      {ref && (
        <button>
          <a href={window.location.href.substring(0, window.location.href.length - ref.length)}>
            go back
          </a>
        </button>
      )}
      {displayArr && displayArr}
    </div>
  );
}

export default App;
