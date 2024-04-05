import React from "react"
import Foto  from "../../assets/kurenai.jpg"
import Instagram from "./ImagensPort/instagram.png"
import Linkedin from "./ImagensPort/linkedin.png"
import * as S from "./Style.jsx"


function Inicio() {
    return (

        <S.Inicio>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ky8awpgrnNhGkmqr9YRqAZExvZI5rQtjfA&usqp=CAU"
                alt="kurenai" />

            <h2>Olá, 🚀</h2>
            <p> Sou Juliana Empreendedora e criadora da marca e loja Reepdex, do interior de SP
                tenho outros cursos, mas nessa jornada da vida de oportunidades entrei
                no mundo da Tecnologia, Atualmente em reta final de ADs , Vai na wev (Front-end)
                e Cybersegurança; na vida estamos em Constante aprendizado</p>

            <S.RedesSociais>
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />


            </S.RedesSociais>
        </S.Inicio>


    )
}

export default Inicio