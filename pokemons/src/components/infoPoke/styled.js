import styled from "styled-components";
import fotoPokedex from '../../assets/imgs/dexInfo.png'

export const ContainerStyled = styled.div`
    background: url(${fotoPokedex}) no-repeat;
    background-size: contain;
    margin: 2%;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    border: red 5px solid;
    border-radius: 15px;
    opacity: 0.8; 
`