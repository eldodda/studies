import logo from '../../assets/_imgs/logo.svg'
import styled from 'styled-components'

const LogoStyle = styled.div`
    display: flex;
    font-size: 30px;
    color: blanchedalmond;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoStyle>
            <LogoImg 
                src={logo}
                alt='Logo'
            />
            <p><strong>Dogon</strong> Games</p>
        </LogoStyle>
    )
}

export default Logo