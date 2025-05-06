import React from 'react';

function Card({Username,btntext}){
  console.log(Username)


  
    return(
        <>
         <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-5">
        <img
          src="https://images.pexels.com/photos/31083143/pexels-photo-31083143/free-photo-of-modern-architectural-design-in-villefranche-sur-saone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="img"
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">{Username}
           
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button>{btntext}</button>
      </div>
      
      </>
    )
}
export default Card