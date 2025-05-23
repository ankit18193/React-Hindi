import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("gray");
  const [textColor, setTextColor] = useState("black");

  return (
    <>
      <div
        className=" flex flex-wrap justify-center items-center  relative w-screen h-screen"
        style={{ backgroundColor: color }}
      >
        <h1 style={{ color: textColor }}>Bg-Color Change</h1>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
          <div className="flex flex-wrap gap-3 justify-center px-3 py-3 rounded-lg bg-white shadow-lg ">
            <button
              onClick={() => {
                setColor("red");
                setTextColor("black");
              }}
              className="outline-none px-3 py-3 shadow-lg text-white"
              style={{ backgroundColor: "red" }}
            >
              {" "}
              RED
            </button>

            <button
              onClick={() => {
                setColor("yellow");
                setTextColor("black");
              }}
              className="outline-none px-3 py-3 shadow-lg text-white"
              style={{ backgroundColor: "yellow" }}
            >
              {" "}
              YELLOW
            </button>
            <button
              onClick={() => {
                setColor("pink");
                setTextColor("black");
              }}
              className="outline-none px-3 py-3 shadow-lg text-white"
              style={{ backgroundColor: "pink" }}
            >
              {" "}
              PINK
            </button>
            <button
              onClick={() => {
                setColor("orange");
                setTextColor("black");
              }}
              className="outline-none px-3 py-3 shadow-lg text-white"
              style={{ backgroundColor: "orange" }}
            >
              {" "}
              ORANGE
            </button>
            <button
              onClick={() => {
                setColor("black");
                setTextColor((prev)=>!prev);
              }}
              className="outline-none px-3 py-3 shadow-lg text-white"
              style={{ backgroundColor: "black" }}
            >
              {" "}
              BLACK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
