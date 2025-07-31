import React from "react";
import { useNavigate } from "react-router-dom";

function Logout(){
    var navigate=useNavigate()
        navigate('/logout')
    return(
        <div>
            <h1 style={{color:"palegoldenrod",backgroundColor:"black",width:"200px",fontSize:"30px",borderRadius:"15px"}}>THANK YOU</h1>
          


        </div>
    )
}
export default Logout