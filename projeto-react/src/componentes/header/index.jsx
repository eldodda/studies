import styled from 'styled-components'
import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../iconesHeader'

const HeaderContainer = styled.header`
    background-color: #788955;
    display: flex;
    justify-content: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header