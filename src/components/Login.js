import React, {useState} from "react";


function Login({currentUsers, onClick}){
    const [name, setName] = useState('')

    return(
        <div className="container-md">
            <form action="/users" method="post">
                <div>
                    <h1 className="text-centre-padding">Login/Register a List Owner</h1>
                </div>

                <div className="container-md">
                    <label className="form-label" htmlFor="select-user">Kindly Select the correct user</label>
                    <div className="dropdown select-user">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Available Users
                        </button>
                        <ul className="dropdown-menu">
                            {currentUsers.map((user) => {
                                return(
                                    <li><a className="dropdown-item" href="#" id ={user.id} onClick={onClick}>{user.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="userNameInput">Add New User</label>
                    <input id="userNameInput" type="text" className = "form-control" placeholder="Enter-the-user's-name-here" name="addUser" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                    <button type="submit" className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    )
}
export default Login