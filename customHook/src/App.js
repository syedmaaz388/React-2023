import './App.css';
import { UseToggle } from './UseToggle';

function App() {
  
  const [count,increase,decrease,reset] = UseToggle();

  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick={increase} >Increase</button>
    <button onClick={decrease} >Decrease</button>
    <button onClick={reset} >Reset</button>

    </div>
  );
}

export default App;
