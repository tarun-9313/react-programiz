import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./home";
import Python from "./python";
import Javascript from "./javascript";
import C from "./c++";
import "./Home.css";
import Html from "./html";
import Css from "./css";
import R from "./r";
import Kotin from "./kotin";
import Swift from "./swift";
import Numpy from "./numpy";
import Pandas from "./pandas";
import Typescript from "./typescript";
import Rust from "./rust";
import Signup from "./signup";
import Login from "./login";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/python" element={<Python/>}></Route>
      <Route path="/javascript" element={<Javascript/>}></Route>
      <Route path="/c" element={<C/>}></Route>
      <Route path="/html" element={<Html/>}></Route>
      <Route path="/css" element={<Css/>}></Route>
      <Route path="/r" element={<R/>}></Route>
      <Route path="/kotin" element={<Kotin/>}></Route>
      <Route path="/swift" element={<Swift/>}></Route>
      <Route path="/numpy" element={<Numpy/>}></Route>
      <Route path="/pandas" element={<Pandas/>}></Route>
      <Route path="/typescript" element={<Typescript/>}></Route>
      <Route path="/rust" element={<Rust/>}></Route>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
