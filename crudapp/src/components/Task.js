import React from 'react'

function Task(props) {
  return (
    <div style={{background : props.completed ? "green" : "white"}} >  
    <h1>{props.taskName}</h1>
    <button onClick={() => props.completeTask(props.id)} >Complete</button>
    <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  )
}

export default Task
