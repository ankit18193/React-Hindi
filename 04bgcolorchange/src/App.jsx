import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, Setcolor] = useState("white")
  useEffect(() => {
    document.body.style.backgroundColor = Color;
    
  }, [Color]);
  const [Textcolor,SetTextColor]=useState("black")
  

  function ColorChange(event){
   const color=event.target.id;
   if(color==="black"){
    SetTextColor("white")
    
   }
   else{
    SetTextColor("black")
   }

   Setcolor(color)
   

  }
  
  
 

  return (
    <>
    <h1 className={`mt-5 text-3xl font-bold ${Textcolor === "white" ? "text-white" : "text-black"}`}>
  Bg-color change
</h1>

    
    
    <div className="mt-5">
        <button id="red" onClick={ColorChange} className="bg-red-500 text-white px-4 py-2 m-2 rounded">Red</button>
        <button id="yellow" onClick={ColorChange} className="bg-yellow-500 text-white px-4 py-2 m-2 rounded">Yellow</button>
        <button id="black" onClick={ColorChange} className="bg-black text-white px-4 py-2 m-2 rounded">Black</button>
        <button id="green" onClick={ColorChange} className="bg-green-500 text-white px-4 py-2 m-2 rounded">Green</button>
        <button id="pink" onClick={ColorChange} className="bg-pink-500 text-white px-4 py-2 m-2 rounded">Pink</button>
        <button id="gray" onClick={ColorChange} className="bg-gray-500 text-white px-4 py-2 m-2 rounded">Gray</button>
        <button id="blue" onClick={ColorChange} className="bg-blue-500 text-white px-4 py-2 m-2 rounded">Blue</button>
      </div>

      
    </>
  )
}

export default App
