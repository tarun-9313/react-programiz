import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"


function Signup(){
    var navigate=useNavigate()
    function handleSignup(){
        navigate("/login")
    }
    return(
        <div id="div1">
            <h1>Enter Details Here</h1>
            <label htmlFor="">Enter Name</label>
            <input type="text" />
            <label htmlFor="">Enter Email</label>
            <input type="text" />
            <label htmlFor="">Enter Number</label>
            <input type="text" />
            <label htmlFor="">Enter Password</label>
            <input type="text" />
            <button onClick={handleSignup}>Signup</button>

        </div>
    )
}
export default Signup