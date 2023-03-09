import { useEffect, useState } from "react";
import React from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import AddTask from "./AddTask";
 
function DisplayTasks({source, ID}){
    // used to decide which ruby thing to fetch
    const [link, setLink] = useState(0)
    console.log(link)
    const onClick = (z) => {
        // console.log(z.target.id)
        localStorage.setItem("val", z.target.id)
        // z.preventDefault()
        setLink(z.target.id)
        console.log(localStorage.getItem("val"))
    }
    const arr = ['default','Completed tasks','Incomplete Tasks', 'Date Order Ascending', 'Date Order Descending']
    
    // used to fetch tasks from my ruby thing
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        fetch(source[localStorage.getItem("val")])
        .then(res => res.json())
        .then((z) =>{
            setTasks(z)
            console.log(tasks)
        })
    },[])
    console.log(tasks)

    const deleteTask = (z)=>{
        z.preventDefault()
        const taskID = z.target.id
        fetch(`http://localhost:9292/tasks/${taskID}`, {
            method: "DELETE",
        })
        // console.log(z.target.id)

        wait(5)
        window.location.reload()
    }


    const changeStatus = (obj) => {
        const url = `http://localhost:9292/tasks/${obj.id}`
        const triggered= !obj.done
        console.log(triggered)
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                done: triggered,
            }),
        })
        alert("Task Status Updated; Refresh Page for Changes")
    }
    
    return(
        <div className="container-md">
            <h3 className="text-centre-padding">Your Tasks</h3>
            <h5 className="text-centre-padding">Sorted By: {arr[localStorage.getItem("val")]}</h5>
            <br/>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/tasks" id="0" onClick={onClick}>Default</a></li>
                    <li><a className="dropdown-item" href="/tasks" id="1" onClick={onClick}>Complete</a></li>
                    <li><a className="dropdown-item" href="/tasks" id="2" onClick={onClick}>Incomplete</a></li>
                    <li><a className="dropdown-item" href="/tasks" id="3" onClick={onClick}>Date: Ascending</a></li>
                    <li><a className="dropdown-item" href="/tasks" id="4" onClick={onClick}>Date: Descending</a></li>
                </ul>
            </div>
            <br/>
            <AddTask
                ID = {ID}
            />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>TASK ID</th>
                    <th>TASK DETAILS</th>
                    <th>DUE DATE</th>
                    <th>DONE?</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {tasks[0]?.map((task, index)=>{
                  
                    return(
                        <tr key={index}>
                            <td>{task.id}</td>
                            <td>{task.task_details}</td>
                            <td>{task.due_date}</td>
                            <td><a href="/tasks"><button className="btn btn-secondary" onClick={(z)=> {
                                z.preventDefault()
                                changeStatus(task)
                            }}>{task.done.toString()}</button></a></td>
                            <td><a href="/tasks"><button className="btn btn-primary" id={task.id} onClick={deleteTask}>Delete</button></a></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTasks