import React, {useState, useEffect} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import DisplayTasks from "./DisplayTasks";

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
 
     
    const isClicked = (z) => {
        // z.preventDefault()

        localStorage.setItem("userId", z.target.id)
    }
    
    

    // function to fetch the tasks for the user and all that 
    const idKey = localStorage.getItem("userId")

    const src = [`http://localhost:9292/users/${idKey}/tasks`, `http://localhost:9292/users/${idKey}/tasks/done`, `http://localhost:9292/users/${idKey}/tasks/notdone`, `http://localhost:9292/users/${idKey}/tasks/date-ascending`, `http://localhost:9292/users/${idKey}/tasks/date-descending`]   

   


    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/tasks" element={
                    <DisplayTasks
                        source={src}
                        ID={idKey}
                    />
                    }/>
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
