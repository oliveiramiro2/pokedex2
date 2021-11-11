import styled from 'styled-components'

export const ContainerStyled = styled.header`
    background-color: ${({theme}) => theme.colorPrimary};
    width: 100%;
    color: ${({theme}) => theme.colorSecondary};
    padding: 1%;
`