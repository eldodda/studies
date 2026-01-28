import styled from 'styled-components';
import perfil from '../../assets/_imgs/perfil.svg'
import sacola from '../../assets/_imgs/sacola.svg'

const ListaIcones = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li`
    margin-right: 40px;
`
const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ListaIcones>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </ListaIcones>
    )
}

export default IconesHeader