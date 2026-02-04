import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getFavos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    flex-direction: column; /* Faz o título ir para baixo da imagem */
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 20px 50px; /* Ajustado para não ficar largo demais */

    p {
        width: 200px;
        color: blanchedalmond;
        margin-top: 15px; /* Espaço entre a foto e o texto */
    }

    img {
        width: 150px; /* Tamanho padrão para as capas */
    }

    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: blanchedalmond;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosAPI = await getFavos();
    setFavoritos(favoritosAPI);
  }
  useEffect(() => {
    fetchFavoritos()
  }, []);

  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {favoritos.map(favorito => (
          <Resultado key={favorito.id}>
            <img src={favorito.src}/>
            <p>{favorito.nome}</p>
          </Resultado>
        ))}
      </ResultadoContainer>
    </AppContainer>
  )
}

export default Favoritos
