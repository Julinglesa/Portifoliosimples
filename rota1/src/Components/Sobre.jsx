import React from "react"
import Style from "Styled-components"
import Vnw from "./ImagensPort/vainaweb.png"
import linkedin from "./ImagensPort/linkedin.png"
import Instagram from "./ImagensPort/instagram.png"
import * as S from "./Style.jsx"



function Sobre() {
    return (
        <S.SobreMim>


            <S.MinhasRedes>

                <p> <a href="https://www.instagram.com/lojareepdex/" target="_blanck"><S.redes src={inst} alt="instagram" /></a></p>
                <p> <a href="https://www.linkedin.com/in/juliana-portella-b29361214/" target="_blanck"><S.redes src={link} alt="linkedin" /></a></p>
            </S.MinhasRedes>

            <S.Interesses>
                <h2>Interesses</h2>
                <p> Desenvolvimento Front -End (HTML, CSS, Javascript) </p>
                <p> Habilidades com C#, C++, SQlserver </p>
            </S.Interesses>

        </S.SobreMim>

    )
}

export default Sobre