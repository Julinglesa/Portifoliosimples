import {useState}  from "react"
import {createGlobalStyle} from "styled-Components"
import Navegação from "./Components/Navagação.jsx"
const  GlobalStyle = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing: border-box;
background-color: black ;
}
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Navegação/>
    </>
  )
}

export default App
