import logo from '../../assets/_imgs/logo.png'
import styled from 'styled-components'

const LogoStyle = styled.div`
    display: flex;
    font-size: 30px;
    color: #a0b0c9;
`
const LogoImg = styled.img`
    margin-right: 10px;
    height: 80px;
    margin-top: 10px;
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