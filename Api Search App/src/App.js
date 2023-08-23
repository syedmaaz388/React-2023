import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const [name,setName] = useState('');
  const [predictedAge, setpredictedAge] = useState({});
  
  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
       setpredictedAge(res.data)
    })  
  }

  useEffect(() => {
    fetchData();
  },[])
 
  return (
    <div className="App">
       <button onClick={fetchData} >Age Batao</button>
       <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
        <h1>{predictedAge.age}</h1>
        <h1>{predictedAge.count}</h1>
        <h1>{predictedAge.name}</h1>
    </div>
  );
}

export default App;
