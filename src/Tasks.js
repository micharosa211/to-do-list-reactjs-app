import React, { Component } from "react";
import ToDoList from "./ToDoList";
import ComplitedTaskList from "./ComplitedTaskList";

class Tasks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            complitedTask: [],
            complitedTaskList: true,
            importance: [],
        }

    }
    addTask = (event) => {
        event.preventDefault()

        let time = new Date;

        let newTask = {
            id: Date.now(),
            name: this._inputValue.value,
            time: time.toLocaleString(),
            importance: this._selectValue.value,
        };

        console.log(newTask);

        this.setState((state) => {
            return ({
                tasks: state.tasks.concat(newTask)

            }
            )

        })

        this.setState((state) => {
            state.tasks.sort((a) => (a.importance === 'VERY IMPORTANT') ? -1 : 1)
        })


        this._inputValue.value = '';

        // this.setState((state) => {
        //     return ({
        //         id: state.id.sort((a,b)=>{
        //             return b - a;
        //         })
        //     })})







    }





    moveTaskMethod = (taskId, taskName, taskTime) => {
        // console.log(taskId, taskName);
        let newComplitedTask = {
            id: taskId,
            name: taskName,
            time: taskTime,

        }
        console.log(newComplitedTask);

        this.setState((state) => {
            return ({
                complitedTask: state.complitedTask.concat(newComplitedTask)
            }

            )
        })
        this.setState((state) => {
            return ({
                tasks: state.tasks.filter((task) => { return (task.id !== taskId) })
            });
        })

    }

    toggleComplitedTask = () => {
        this.setState((prevState) => {
            return ({
                complitedTaskList: !prevState.complitedTaskList
            });
        })
    }

    render() {
        let complitedList = '';
        if (this.state.complitedTaskList) {
            complitedList = <ComplitedTaskList complited={this.state.complitedTask} />
        } else {
            complitedList = '';
        }
        return (
            <div>
                <form>
                    <input ref={(data) => { this._inputValue = data }} type='text' placeholder="type the task" className="input"></input>
                    <select ref={(value) => { this._selectValue = value }}>
                        <option value="VERY IMPORTANT">VERY IMPORTANT</option>
                        <option value="standard">Standard</option>

                    </select>
                    <button onClick={this.addTask} type="submit">Add</button>
                </form>
                <ToDoList list={this.state.tasks} moveTaskMethod={this.moveTaskMethod} />
                <h2 className="complitedListTitle" onClick={this.toggleComplitedTask}>Complited Tasks</h2>
                {complitedList}
            </div>
        )

    }
}
export default Tasks;