import React, {useState, useEffect} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import DisplayTasks from "./DisplayTasks";
import { wait } from "@testing-library/user-event/dist/utils";

function PageHandler(){
    


    // shows the users we have available
    const [users, setUsers] = useState([])
    const url = "http://localhost:9292/users"

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[])
    console.log(users)

    // This function will save the id of the user which will be used for fetching
    const [userId, setUserId] = useState()
     
    const isClicked = (z) => {
        // z.preventDefault()
        setUserId(z.target.id)
        localStorage.setItem("userId", z.target.id)
    }
    // function to handle creation of new user
    // const configUser = {
    //     method: "POST",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         name: userNameInput
    //     }),
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch("http://localhost:9292/users", configUser)
    //     .then(res => res.json())
    //     .then((user) => {
    //         console.log(user)
    //     })
    // }

    // function to fetch the tasks for the user and all that 
    const idKey = localStorage.getItem("userId")

    const src = [`http://localhost:9292/users/${idKey}/tasks`, `http://localhost:9292/users/${idKey}/tasks/done`, `http://localhost:9292/users/${idKey}/tasks/notdone`, `http://localhost:9292/users/${idKey}/tasks/date-ascending`, `http://localhost:9292/users/${idKey}/tasks/date-descending`]
    
    // console.log(`tasks: ${tasks[0]}`)

    // console.log(users)
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/tasks" element={
                    <DisplayTasks
                        source={src}
                    />
                    }/>
                    <Route path="/" element={
                       <Login
                        currentUsers={users}
                        onClick={isClicked}
                        onSubmit={(z) => z.preventDefault()}
                        />
                    }/>
                </Routes>
            </BrowserRouter>



           
        </div>
    )
}
export default PageHandler
