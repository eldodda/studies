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

const VitrineJogos = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
    margin-bottom: 50px;
`

const ItemJogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    
    img {
        width: 200px;
        border-radius: 8px;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }
    }

    p {
        color: blanchedalmond;
        font-weight: bold;
        margin-top: 15px;
        text-align: center;
    }
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                tamanhoFonte="36px"
            >Últimos lançamentos </Titulo>

            <VitrineJogos>
                {jogos.map(jogo => (
                    <ItemJogo>
                        <img src={jogo.src} />
                        <p>{jogo.nome}</p>
                    </ItemJogo>
                    ))}
            </VitrineJogos>

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