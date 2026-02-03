import styled from "styled-components";

export const Titulo = styled.h2`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    padding: 30px 0;
    color: ${props => props.cor || 'blanchedalmond'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center;'};
    margin: 0;
`

