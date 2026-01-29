import styled from "styled-components"
import { Titulo } from "../titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
    display: flex;
    margin: 40px auto;
    max-width: 600px;
    padding: 25px 40px;
    justify-content: space-between;
    width: 100%;
    border-bottom: 5px solid #EB9B00;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 24px;
    font-weight: bold;
    margin: 15px 0;
    font-family: 'Trebuchet MS', sans-serif;
`

const Descricao = styled.p`
    max-width: 300px;
    color: #444;
    font-size: 16px;
    line-height: 1.5;
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    margin-top: 10px;
    transition: transform 0.2s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        background-color: #F8B125;
    }
`

const ImgLivro = styled.img`
    width: 150px;
    border-radius: 5px;
`

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
    return (
        <Card>
            <div style={{ textAlign: 'left', flex: '1' }}>
                <Titulo tamanhoFonte="20px" cor="#EB9B00">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ImgLivro src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda