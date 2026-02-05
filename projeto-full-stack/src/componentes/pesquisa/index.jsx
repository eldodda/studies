import Input from "../input"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getGames } from "../../servicos/jogos.js"
import { postFavos } from "../../servicos/favoritos.js"

const PesquisaCont = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: blanchedalmond;
    text-align: center;
    padding: 85px 0;
    width: 100%;
    min-height: 270px;
    height: auto;
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
    margin: 10px auto;
    padding: 10px;
    width: 50%;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;

    p {
        width: 200px;
        margin-left: 20px;
    }

    img {
        width: 80px;
    }

    &:hover {
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.1);
    }
`

function Pesquisa() {
    const [jogosPesquisados, setjogosPesquisados] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        fetchGames()
    }, [])

    async function fetchGames() {
        const gamesFromAPI = await getGames()
        setGames(gamesFromAPI)
    }
async function insertFavo(id) {
    try {
        const resposta = await postFavos(id);
        alert(resposta.message); 
    } catch (error) {
        const msgErro = error.response.data.message;
        alert(msgErro);
    }
}

    return (
        <PesquisaCont>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu jogo em nossas estantes.</Subtitulo>
            <Input
                placeholder="Vamos de que hoje?"
                onChange={evento => {
                    const textoDigitado = evento.target.value
                    if (!textoDigitado) {
                        return setjogosPesquisados([]);
                    }
                    const resultadoPesquisa = games.filter(jogo => jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                    setjogosPesquisados(resultadoPesquisa)
                }}
            />
            {jogosPesquisados.map(jogo => (
                <Resultado onClick={() => insertFavo(jogo.id)}>
                    <img src={jogo.src} />
                    <p>{jogo.nome}</p>
                </Resultado>
            ))}
        </PesquisaCont>
    )
}

export default Pesquisa
