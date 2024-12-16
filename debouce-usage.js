import { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [debounced_val, setDebouncedVal] = useState(inputVal);

  const handleChange = (e) => {
    setInputVal(e.target.value);
    debouncedHandle(e.target.value);
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const debouncedHandle = useCallback(debounce(setDebouncedVal, 1000), []);

  return (
    <div className="App">
      <input value={inputVal} onChange={handleChange} />
      <div>{debounced_val}</div>
    </div>
  );
}
