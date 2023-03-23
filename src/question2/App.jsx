// 2. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.
// Varje foto ska renderas i en egen komponent.
import { useEffect, useState } from "react";
import ImgDisplay from "./ImgDisplay";
function App() {
  const [imgArr, setImgArr] = useState([])

  useEffect(() => {
    populate()
  }, [])

  function populate() {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
      .then((response) => response.json())
      .then((data) => setImgArr(data));
  }

  let displayImgArr = imgArr.map((el) => { console.log(el)
    return <ImgDisplay key={el.id} prop={el.thumbnailUrl} />
  })
  return <div>{displayImgArr && displayImgArr}</div>;
}

export default App;
