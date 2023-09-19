import './App.css';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {c} = useSelector(state => state.custom)
  const addBtn = () => {
       dispatch({
        type:"increment"
       });
  }
  const addBtn25 = () => {
     dispatch({
      type:"incrementByValue",
      payload:25
     })
  }
  const subbtn = () => {
      dispatch({
        type:"decrement"
      })
  }
  return (
    <div className="App">
    <h1>{c}</h1>
    <button onClick={addBtn}>Increament</button>
    <button onClick={addBtn25} >Incremet by 25</button>
    <button onClick={subbtn}>Decrement</button>
    </div>
  );
}

export default App;
