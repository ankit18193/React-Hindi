import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='w-screen h-screen'style={{backgroundColor:color}}>
        heelo
        <div className='flex '></div>
      </div>
    </>
  )
}

export default App
