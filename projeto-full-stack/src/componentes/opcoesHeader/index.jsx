import styled from "styled-components";
import { Link } from "react-router-dom";

const ListaOpcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['Categorias', 'Estante', 'Favoritos'];



function OpcoesHeader() {
    return (
        <ListaOpcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ))}
        </ListaOpcoes>
    )
}

export default OpcoesHeader