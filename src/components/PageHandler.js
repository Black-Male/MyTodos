import React, {useState, useEffect} from "react";
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
        z.preventDefault()
        setUserId(z.target.id)
        
    }

    console.log(userId)
    

    // function to get rid of Login page, should fire after click
     


    // function to fetch the tasks for the user and all that
    const [userTasks, setUserTasks] = useState([])


    console.log(users)
    return(
        <div>
            <Login
                currentUsers={users}
                onClick={isClicked}
            />

        </div>
    )
}
export default PageHandler
