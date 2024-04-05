import React from "react"
import *as S from "./Style.jsx"
import Vnw from "./ImagensPort/vainaweb.png"
import Css from "./ImagensPort/css.png"
import Html from "./ImagensPort/html.png"
import Js from "./ImagensPort/js.png"

function Sobre() {
    return (

        <S.Sobre>

            <S.Estudos>

                <h2>Cursos</h2>
                <div>
                    <h3>Desenvolvimento Front -End</h3>
                    <img src={Vnw} alt="cursando" />

                </div>
            </S.Estudos>


            <S.Habilidades>
                <h2>Praticas e Habilidades</h2>

                <div>
                    <img src={Css} alt="" />
                    <h3>Css ; buscando me melhorar</h3>
                </div>

                <div>

                    <img src={Html} alt="" />
                    <h3>Html</h3>
                </div>

                <div>
                    <img src={Js} alt="" />
                    <h3>Js , buscando melhorar cada vez mais</h3>

                </div>

            </S.Habilidades>

        </S.Sobre>



    )
}





export default Sobre