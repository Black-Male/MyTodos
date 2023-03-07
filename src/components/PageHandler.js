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
            console.log(users)
        })
    },[])

    // This function will save the id of the user which will be used for fetching
    const [userId, setUserId] = useState()
     
    const isClicked = (z) => {
        setUserId(z.target.id)
    }
    // function to handle creation of new user


    // function to fetch the tasks for the user and all that
    const [userTasks, setUserTasks] = useState([])


    console.log(users)
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/tasks" element={<DisplayTasks/>}/>
                    <Route path="/" element={
                       <Login
                        currentUsers={users}
                        onClick={isClicked}
                        />
                    }/>
                </Routes>
            </BrowserRouter>



           
        </div>
    )
}
export default PageHandler
