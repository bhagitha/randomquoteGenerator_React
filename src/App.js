import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useRef } from 'react';

function App() {
  
  // UseRef Example
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}


export default App;
