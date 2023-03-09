import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

function AddTask({ID}){
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate ] = useState('') 
    const [done, setDone] = useState(false) 
    const userId = ID

    const handleSubmit = (z) => {
        z.preventDefault()
        const url = "http://localhost:9292/tasks"
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task_details: details,
                due_date: dueDate,
                done: done,
                user_id: userId
            }),
        })
        .then(res => res.json())
        .catch((error)=>{
            console.error(error);
        })

        alert("task Added; reload page")
        
    }
    const changeObj = ()=>{
        setDone(!done)
    }

    return (
        <div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input className="form-control" type="text" placeholder="Task Details" value={details} onChange={(z)=> {setDetails(z.target.value)}}></input>
                </div>
                <div className="col-auto">
                    <input className="form-control" type="text" placeholder='DueDate -> yyyy/mm/dd' value={dueDate} onChange={(z) => {setDueDate(z.target.value)}}></input>
                </div>
                <div className="col-auto">
                    <input className="form-control" type='text' placeholder="status of task?" value={done.toString()}></input>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={changeObj}>Status</button>
                </div>
                <div className="col-auto">
                    <input className="form-control" type='text' placeholder="userId" value={userId}></input>
                </div>

                <button className="btn btn-primary" type="submit">Add Task</button>
  
            </form>
        </div>
    )
}
export default AddTask