import React from "react";
import { NavLink } from "react-router-dom";


function Nav(){
    <nav>
        <NavLink exact="true" to="/">
            {" "}
            Login
        </NavLink>
        <NavLink to="/register">
            Register
        </NavLink>
        <NavLink to="/displaytasks">
            DisplayTasks
        </NavLink>
    </nav>
}