import Input from "../input"
import styled from "styled-components"
import { useState } from "react"
import { jogos } from './dadosPesquisa.jsx'

const PesquisaCont = styled.search`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: blanchedalmond;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: blanchedalmond;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

function Pesquisa() {
    const [jogosPesquisados, setjogosPesquisados] = useState([])

    return (
        <PesquisaCont>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu jogo em nossas estantes.</Subtitulo>
            <Input
                placeholder="Vamos de que hoje?"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = jogos.filter(jogo => jogo.nome.includes(textoDigitado))
                    setjogosPesquisados(resultadoPesquisa)
                }}
            />
            {jogosPesquisados.map(jogo => (
                <Resultado>
                   <img src={jogo.src}/>
                   <p>{jogo.nome}</p>
               </Resultado>
            ))}
        </PesquisaCont>
    )
}

export default Pesquisa
