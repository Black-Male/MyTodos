import React, {useState} from "react";

function Login({currentUsers, onClick}){
    const [name, setName] = useState('')
    // const addUser = (e) => {
    //     e.preventDefault()
    //     fetch(`http://localhost:9292/users`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             name: e,
    //         }),
    //     })
    //     .then(res => res.json())
    //     .then(newUser => {
    //         onAddUser(newUser)

    //     })
    // }
    const addUser = (z) => {
        z.preventDefault()
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
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Available Users
                        </button>
                        <ul className="dropdown-menu">
                            {currentUsers.map((user) => {
                                // console.log (user)
                                return(
                                    <li><a className="dropdown-item" href="/tasks" id ={user.id} onClick={onClick}>{user.name}</a></li>
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