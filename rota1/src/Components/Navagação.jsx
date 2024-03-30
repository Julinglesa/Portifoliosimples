import React from "react"
import logo from "./src/Components/assets/Kurenai.jpg"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import * as S from "./Style.jsx"
import {BrowserRouter ,Routes ,Route ,Link } from "react-router-dom"


function  Navegação() { 
    return(

<BrowserRouter>
<S.Navegação>
<S.lista>
    
<li>Inicio</li>
<li>Sobre</li>
<li>Projetos</li>

</S.lista>
<S.Navegação>

<Routes>
    <Route path="Inicio" element={<Inicio/>} />
    <Route path="Sobre" element = { <Sobre/>}/>
    <Route path="Projetos" element = {<Projetos />}/>

</Routes>

</BrowserRouter>

 )
}


export default Navegação;