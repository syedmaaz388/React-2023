import './App.css';
import { useState } from 'react';

function App() {
  const [color,setColor] = useState("white")
  function handleChange(rang){
    setColor(rang)
  }

  return (
    <div className="App">
    <div className='box' style={{background:color}} >
    <div className="line">
      <button onClick={() => handleChange("Green")}>Green</button>
      <button onClick={() => handleChange("Red")}>Red</button>
      <button onClick={() => handleChange("Blue")}>Blue</button>
      <button onClick={() => handleChange("Black")}>Black</button>
      <button onClick={() => handleChange("Olive")}>Olive</button>
      <button onClick={() => handleChange("Purple")}> Purple</button>
      <button onClick={() => handleChange("Yellow")}>Yellow</button>
    </div>
    </div>
  </div>
  );
}

export default App;
