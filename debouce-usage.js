import { useState } from "react";
import "./styles.css";

export default function App() {
  const refData = ['apple', 'mango'];
  const [resultData, setResult] = useState([])
  function dummyData(e){
    console.log(e.target.value);
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
         const myRes = refData.filter(
          (data) => {
            return data.includes(e.target.value)
          })
        setResult(myRes)
      }, 1000)
    })
  }

  const debounce = (func, delay = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  
  const debounceHandler = debounce(dummyData);

  return (
    <div className="App">
      <input type='text' onChange={debounceHandler} />
      <div>
        {
          resultData.map((result)=>{
            return <ul>
              <li>
                {result}
              </li>
            </ul>
          })
        }
      </div>
    </div>
  );
}
