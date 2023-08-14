import { useState } from 'react';
import './App.css';

function App() {

  const[taskValue,setTaskValue]  = useState("")

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  }

  const [tasks,setTasks] = useState([]);

  function handleDelete(id){
      setTasks(tasks.filter(task => task.id !== id));
  }
  function handleReset(){
    setTaskValue("")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const task ={
      id: Math.floor(Math.random() * 10000),
      name: taskValue
    }
    setTasks([...tasks,task]);
    handleReset()
   
    
  }

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}  >
        <input onChange={handleChange} type="text" placeholder='Enter the task.....' value={taskValue} />
        <span onClick={handleReset}>Reset</span>
        </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} >
          <p>{task.name}</p>
          <button onClick={() => handleDelete(task.id)} >Delete</button>
          </li>
        ))}
      </ul>
      
     
    </div>
  );
}

export default App;
