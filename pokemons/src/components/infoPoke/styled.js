import styled from "styled-components";
import fotoPokedex from '../../assets/imgs/dexInfo.png'

export const ContainerStyled = styled.div`
    background: url(${fotoPokedex}) no-repeat;
    background-size: contain;
    margin-top: 5%;
    padding: 2%;
    width: 98%;
    height: 650px;
    border-radius: 15px;
    opacity: 0.8; 
    display: ${props => props.info === 'mostrarDefault' || props.info === 'mostrar' ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 900px){
        background-size: contain;
    }
`

export const ContainerBasicStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`

export const BasicInfoStyled = styled.div`
    width:${props => props.exibir === 'moves'? '55%' : 'max-content'};
    margin-top: 1%;
    border: 3px gold double;
    padding: 1%;
    display:${props => props.exibir === 'moves'? 'flex' : ''};
    flex-wrap:${props => props.exibir === 'moves'? 'wrap' : ''};
    justify-content:${props => props.exibir === 'moves'? 'space-around' : ''};
    height:${props => props.exibir === 'moves'? '50%' : ''};
    background-color:${({ theme }) => theme.colorPrimary};
    color:${({ theme }) => theme.colorSecondary};
`


export const TextInfoStyled = styled.p`
    text-transform: capitalize;
    font-size: ${ props  => props.tipo === 'nome'? '2.2em' : '1.7em'};
    display: flex;
    justify-content: center;
`

export const ContainerBotoesStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1%;
    width: 55%;
`

export const BotoesStyled = styled.p`
    padding: 1.2%;
    background-color: ${props => props.acao === 'voltar'? 'red' : 'green'};
    color: ${({ theme }) => theme.colorSecondary};
    margin: 1%;
    cursor: pointer;
    max-height: min-content;

    &:hover{
        transition: .2s ease-in-out;
        background-color: ${({ theme }) => theme.colorSecondary};
        color: green;  
        border: 2px groove black;
        opacity: 0.8;
    }
`

export const LoadStyled = styled.p`
    text-align: center;
    margin-top: 20%;
    font-size: 2em;
`