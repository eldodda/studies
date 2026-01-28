import { jogos } from './dadosUltimosLancamentos'
import { Titulo } from '../titulo'
import CardRecomenda from '../cardRecomdend'
import ct from '../../assets/_imgs/ct.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-image: linear-gradient(90deg, #004274 35%, #407fab 165%);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                tamanhoFonte="36px"
            >Últimos lançamentos </Titulo>
            {jogos.map(jogo => (
                <NovosLivrosContainer>
                    <img src={jogo.src} />
                    <p>{jogo.nome}</p>
                </NovosLivrosContainer>))}
            <CardRecomenda
                titulo="Talvez você também curta:"
                subtitulo="Chrono Trigger"
                descricao="Uma aventura pelo tempo!"
                img={ct}
            />
            <>
            </>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos