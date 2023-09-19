import './App.css';
import { UseToggle } from './UseToggle';

function App() {
  const [isVisible,toggle] = UseToggle()
  return (
    <div className="App">
     <button onClick={toggle}>{isVisible ? "Hide" : "Show" }</button>
     {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
