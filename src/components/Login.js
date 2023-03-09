import { wait } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";

function Login({currentUsers, onClick}){
    const [name, setName] = useState('')
    let url = 'http://localhost:9292/users'
    const addUser = (z) => {
        z.preventDefault()
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            }),
        })
        .then(res => res.json())
        .catch((error) => {
            console.error(error);
        })
        
        alert("User added; reload page")
    }

    return(
        <div className="container-md">
            <form onSubmit={addUser}>
                <div>
                    <h1 className="text-centre-padding">Login/Register a List Owner</h1>
                </div>

                <div className="container-md">
                    <label className="form-label" htmlFor="select-user">Kindly Select the correct user</label>
                    <div className="dropdown select-user">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Available Users
                        </button>
                        <ul className="dropdown-menu">
                            {currentUsers.map((user, index) => {
                                // console.log (user)
                                return(
                                    <li key={index}><a className="dropdown-item" href="/tasks" id ={user.id} onClick={onClick}>{user.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="userNameInput">Add New User</label>
                    <input id="userNameInput" type="text" className = "form-control" placeholder="Enter-the-user's-name-here" name="addUser" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                    <button type="submit" className="btn btn-primary" >Add User</button>
                </div>
            </form>
        </div>
    )
}
export default Login