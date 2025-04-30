// import { Children } from "react"

let rootContainer=document.getElementById('root')

let reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'welcome to google'

}

function renderFunction(reactElement,container){
     
    let domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)

}

renderFunction(reactElement,rootContainer)