import React from 'react'
import { CreateGlobalStyle } from "styled-components"
import Navegação from "./Components/Navegação.jsx"

const GlobalStyle = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing: border-box;
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
