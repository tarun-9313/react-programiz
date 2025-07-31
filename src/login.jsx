import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"

function Login(){
    var navigate=useNavigate()
    function handleLogin(){
        navigate("/home")
    }
    return(
        <div id="div2">
            <h1>Login page</h1>
            <label htmlFor="">Enter Email</label>
            <input type="text" />
            <label htmlFor="">Enter Password</label>
            <input type="text" />
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}
export default Login