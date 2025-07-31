import React, { useEffect, useState } from "react";

function Tarun(){
    var [data,setData]=useState([])
    async function fetchData(){
        var myData=await fetch('')
        var result=await myData.json()
        setData(result)
    }
    console.log(data);
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            {
                data.map((item)=>{
                    return(
                        <div>
                            <h1>{item.price}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Tarun
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import User from "./user";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}