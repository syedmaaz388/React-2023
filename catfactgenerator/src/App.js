import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
   const url = 'https://catfact.ninja/fact';
  const [catfacts, setcatfacts] = useState('');
  const generateCatfacts = () => {
    axios.get(url).then((res) => {
      setcatfacts(res.data.fact)
    })
  }
  useEffect(() => {
     generateCatfacts();
  },[])
  return (
    <div className="App">
      <button onClick={generateCatfacts} >Generate Facts</button>
      <h2>{catfacts}</h2>
    </div>
  );
}
export default App;
