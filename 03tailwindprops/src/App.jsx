

import './App.css'
import Card from './component/Card'


function App() {
  let Myobj={
    Username:"ankit",
    age:21
  }
 let MyArr=[1,2,3,4];

  return (
    <>
    <h1 className='bg-yellow-200 text-black p-8 rounded-xl'>hello from Tailwind</h1>
    <Card Username="ankit"  btntext="visit me"/>
    <Card Username="chotu" btntext="visit me" />
    
    
    </>
    

  )
}

export default App
