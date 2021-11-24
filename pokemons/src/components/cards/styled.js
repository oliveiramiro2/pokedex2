import styled from 'styled-components'

export const ContainerPageStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ContainerCardStyled = styled.div`
    background-color: ${({theme}) => theme.colorPrimary};
    width: 250px;
    height: 200px;
    border-radius: 15px;
    margin: 1%;
    border: red 5px solid;
    opacity: 0.9; 
    text-transform: capitalize;
    cursor: pointer;

    & a{
        color: ${({theme}) => theme.colorSecondary};
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    & a:hover{
        transition: .2s ease-in-out;
        background-color: rgb(255, 255, 255, 0.3);
        font-size: 1.3em;
        color: gold;
    }
`

export const ContainerNav = styled.footer`
    display: flex;
    justify-content: center;
    margin: 2%;

    & button{
        margin: 0 2%;
        background-color: #444444;
        color: #fff;
        padding: 0.5%;
    }
`

export const LoadStyled = styled.p`
    text-align: center;
    margin-top: 20%;
    font-size: 2em;
`