import styled from "styled-components";

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

const textoOpcoes = ['Categorias', 'Minha estante', 'Favoritos'];


function OpcoesHeader() {
    return (
        <ListaOpcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </ListaOpcoes>
    )
}

export default OpcoesHeader