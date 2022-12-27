import React, { Component } from "react";



function ComplitedTaskList (props) {

 

let complitedTasks = props.complited;
let tasksListComplited = complitedTasks.map((task)=>{
return (
    <li key={task.id}><span>ct</span> {task.name}<span> {task.time}</span>
    
    </li>
)
})


    
    return(
            <div>

<ul>
    {tasksListComplited}
  
</ul>
            </div>
    )
    
}

export default ComplitedTaskList;