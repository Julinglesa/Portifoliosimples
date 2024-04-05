import React from "react"
import Reepdex from "./ImagensPort/reepdex.png"
import Stitch from "./ImagensPort/stitch.jpg"
import Logodog from "./ImagensPort/logodog.jpg"

function Projetos() {
    return (

        <S.Section>

            <S.MinhaDiv>
                <S.Port src={Reepdex} alt="lojareepdex" />
                <p>Caminho: <a href="https://www.instagram.com/lojareepdex" target="_blank">https://www.instagram.com/lojareepdex</a></p>

                <S.Port src={Stitch} alt="lojaroupa" />
                <p>Repositorio: <a href="https://github.com/Julinglesa/desafiovainawev2" target="_blanl">https://github.com/Julinglesa/desafiovainawev2</a></p>

                  
                  <S.Port src={Logodog} alt ="fantastika"/>
                  <p>Repositorio : <a href="https://github.com/Julinglesa/desafioFantastika" target ="_blank">https://github.com/Julinglesa/desafioFantastika</a></p>


            </S.MinhaDiv>
        </S.Section>

 )
}

export default Projetos