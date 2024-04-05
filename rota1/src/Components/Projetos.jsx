import React from "react"
import Reepdex from "./ImagensPort/reepdex.png"
import Stitch  from "./stitch.jpg"




function Projetos(){
    return(

<S.ClasSection>

    <S.MinhaDiv>
        <S.Port src={Reepdex} alt="loja"/>
        <p>Caminho: <a href="https://www.instagram.com/lojareepdex" target ="_blank">https://www.instagram.com/lojareepdex</a></p>

        <S.Port src={Stitch} alt="lojaroupa"/>
        <p>Repositorio: <a href="https://github.com/Julinglesa/desafiovainawev2" target ="_blanl">https://github.com/Julinglesa/desafiovainawev2</a></p>

        
        



    </S.MinhaDiv>
</S.ClasSection>







 )
}

export default Projetos