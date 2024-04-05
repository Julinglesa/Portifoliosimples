import React from "react"
import Foto from "../../assets/Kurenai.jpg"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function Navegação() {
    return (

        <BrowserRouter>
            <S.Nav>
                <S.UI>

                    <li> <Link to="/"> Inicio" </Link> </li>
                    <li> <Link to="Sobre"> Sobre </Link> </li>
                    <li> <Link to="/Projetos"> Projetos </Link> </li>

                </S.UI>
            </S.Nav>


            <Routes>
                <Route path="Inicio" element={<Inicio />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="Projetos" element={<Projetos />} />

            </Routes>

        </BrowserRouter>

    )
}


export default Navegação;