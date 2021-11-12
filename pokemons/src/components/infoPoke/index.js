import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CgPokemon } from 'react-icons/cg'

import Header from '../header'
import changeInfo from '../../store/action/infoA'

import { ContainerStyled, LoadStyled, ContainerBotoesStyled } from './styled'

function InfoPoke({ info, changeInfo }){
    const [verify, setVerify] = React.useState(true)

    if(verify){
        changeInfo(localStorage.getItem("NumeroPoke"))
        setVerify(!verify)
    }
        
    console.log(info, verify)
    if(info){

        return(
        <div>
            <Header />
            <ContainerStyled>
                <Link to='/cards'>funf</Link>

                <ContainerBotoesStyled><h1>Nome: {info.species.name}</h1></ContainerBotoesStyled>

                <ContainerBotoesStyled>
                    <h1>tipo: {info.types[0].type.name} {info.types[1]? info.types[1].type.name : <></>}</h1>
                </ContainerBotoesStyled>

                <ContainerBotoesStyled>                   
                    <img src={info.sprites.front_default} alt='sprite5' />
                    <img src={info.sprites.back_default} alt='sprite1' />
                    <img src={info.sprites.front_shiny} alt='sprite7' />              
                    <img src={info.sprites.back_shiny} alt='sprite3' />
                </ContainerBotoesStyled>
                
            </ContainerStyled>
        </div>
        )
    }else{
        return(
            <div>
                <Header />
                <LoadStyled><CgPokemon color="#f00" /> Carregando...</LoadStyled>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return{
        info: state.info.info
    }
}

export default connect(mapStateToProps, { changeInfo })(InfoPoke)