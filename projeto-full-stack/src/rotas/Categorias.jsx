import styled from 'styled-components'
import Pesquisa from '../componentes/pesquisa'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function Categorias() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  )
}

export default Categorias
