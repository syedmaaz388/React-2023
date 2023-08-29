import { useState } from 'react';
import './App.css';
import Task from './components/Task';
function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  
  const addTask = () => {
if(newTask === ""){
  
}else{
  const task ={
    id:Math.floor(Math.random() * 100000),
    taskName:newTask,
    completed:false
  }
const newTodoList = [...todoList,task];
setTodoList(newTodoList)
setNewTask("")
}

    
  }

  const deleteTask = (t) => {
     setTodoList(todoList.filter((tt) => tt.id !== t));
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id){
          return{...task,completed:true};
        }else{
          return task;
        }
      })
    )
  }
 
  return (
    <div className="App">
   <div>
    <input value={newTask} type="text" onChange={handleChange} />
    <button onClick={addTask} >Add Task</button>
   </div>
<div>
  {todoList.map((task) => (
  <Task taskName = {task.taskName} id = {task.id} deleteTask = {deleteTask}  completed = {task.completed} completeTask={completeTask} />
  ))}
</div>
    </div>
  );
}


export default App;
