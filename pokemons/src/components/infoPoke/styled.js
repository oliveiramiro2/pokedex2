import styled from "styled-components";
import fotoPokedex from '../../assets/imgs/dexInfo.png'

export const ContainerStyled = styled.div`
    background: url(${fotoPokedex}) no-repeat;
    background-size: contain;
    margin-top: 15%;
    padding: 2%;
    height: 650px;
    border-radius: 15px;
    opacity: 0.8; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1020px){
        background-size: contain;
    }
`

export const ContainerBotoesStyled = styled.div`
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorSecondary};
    width: max-content;
    margin-top: 2%;
`

export const LoadStyled = styled.p`
    text-align: center;
    margin-top: 20%;
    font-size: 2em;
`