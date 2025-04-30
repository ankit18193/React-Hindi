import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
let UserName="chotu"

const reactElement = React.createElement(
  'a',
  {href:"https://google.com"},
  "welcome to google from vite",
  UserName

)

function MeraFunction(){
  return(
    <h1>A hello from mera function</h1>
  )
}

createRoot(document.getElementById('root')).render(
  
 <><MeraFunction/>
 {reactElement}
 </>
  
)
