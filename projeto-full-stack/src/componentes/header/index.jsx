import styled from 'styled-components'
import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../iconesHeader'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #8b7450;
    display: flex;
    justify-content: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header