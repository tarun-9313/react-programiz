import React from "react";
import { useNavigate } from "react-router-dom";
import { SiJavascript, SiPython, SiR } from "react-icons/si";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div id="tarun">
      <h1 id="title">Learn Programming for Free</h1>

      {/* First row of languages */}
      <div id="div">
        <button onClick={() => navigate("/python")}>
          <SiPython /> Python
        </button>
        <button onClick={() => navigate("/javascript")}>
          <SiJavascript /> JavaScript
        </button>
        <button onClick={() => navigate("/c")}>C++</button>
        <button onClick={() => navigate("/html")}>HTML</button>
        <button onClick={() => navigate("/css")}>CSS</button>
        <button onClick={() => navigate("/r")}>
          <SiR /> R
        </button>
      </div>

      {/* Second row of languages */}
      <div id="divs">
        <button onClick={() => navigate("/kotin")}>Kotlin</button>
        <button onClick={() => navigate("/swift")}>Swift</button>
        <button onClick={() => navigate("/pandas")}>Pandas</button>
        <button onClick={() => navigate("/numpy")}>NumPy</button>
      </div>

      {/* Third row of languages */}
      <div id="divss">
        <button onClick={() => navigate("/typescript")}>TypeScript</button>
        <button onClick={() => navigate("/rust")}>Rust</button>
      </div>
    </div>
  );
}

export default Home;
