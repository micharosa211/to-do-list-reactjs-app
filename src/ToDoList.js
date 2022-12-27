import React, { Component } from "react";



function ToDoList(props) {




    let tasks = props.list;
    let tasksList = tasks.map((task) => {
        return (
            <li key={task.id}><span onClick={() => { props.moveTaskMethod(task.id, task.name, task.time) }}>ct</span><span> {task.name}</span><span> {task.time}</span><span> {task.importance}</span>

            </li>
        )
    })



    return (
        <div>

            <ul>
                {tasksList}

            </ul>
        </div>
    )

}

export default ToDoList;