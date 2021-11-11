import styled from 'styled-components'

export const HeaderStyled = styled.header`
    background-color: ${({theme}) => theme.colorPrimary};
    color: ${({theme}) => theme.colorSecondary};
    padding: 1%;
    display: flex;
    justify-content: space-between;
`