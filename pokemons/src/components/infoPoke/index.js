import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CgPokemon } from 'react-icons/cg'

import Header from '../header'
import changeInfo from '../../store/action/infoA'

import { 
    ContainerStyled, LoadStyled, BasicInfoStyled, TextInfoStyled,
    ContainerBotoesStyled, BotoesStyled, ContainerBasicStyled
} from './styled'

function InfoPoke({ info, changeInfo }){
    const [verify, setVerify] = React.useState(true)
    const [show, setShow] = React.useState({ padrao: 'mostrarDefault', segunda: 'ocultar' })

    if(verify){
        changeInfo(localStorage.getItem("NumeroPoke"))
        setVerify(!verify)
    }
        
    console.log(info)
    if(info){
        
        return(
        <div>
            <Header />

            <ContainerStyled info={show.segunda}>
                <Link to='/cards'>funf</Link>
                <ContainerBasicStyled>

                    <BasicInfoStyled>
                        <TextInfoStyled tipo="nome">
                            <p>{info.species.name}</p>
                        </TextInfoStyled>
                    </BasicInfoStyled>

                    <BasicInfoStyled>
                        <TextInfoStyled>
                            <p>
                                {info.types[0].type.name}
                                {info.types[1]? ', '+info.types[1].type.name : <></>} 
                                {info.types[2]? ' e '+info.types[2].type.name : ''}
                            </p>
                        </TextInfoStyled>
                    </BasicInfoStyled>

                </ContainerBasicStyled>   

                <BasicInfoStyled exibir='moves'>
                    {info.moves.map((atk, id) => {
                        return(
                            <p key={id}>{atk.move.name} / </p>
                        )
                    })}
                </BasicInfoStyled>             

                <BotoesStyled acao='voltar' onClick={() => setShow({padrao: 'mostrarDefault', segunda: 'ocultar'})}>
                    Voltar
                </BotoesStyled>

            </ContainerStyled>

            <ContainerStyled info={show.padrao}>
                <Link to='/cards'>funf</Link>
                
                <ContainerBasicStyled>
                    <BasicInfoStyled>

                        <TextInfoStyled tipo="nome">
                            <p>{info.species.name}</p>
                        </TextInfoStyled>

                    </BasicInfoStyled>

                    <BasicInfoStyled>
                        <TextInfoStyled>
                            <p>
                                {info.types[0].type.name}
                                {info.types[1]? ', '+info.types[1].type.name : ''} 
                                {info.types[2]? ' e '+info.types[2].type.name+'' : ''}
                            </p>
                        </TextInfoStyled>
                    </BasicInfoStyled>
            
                </ContainerBasicStyled>

                <BasicInfoStyled>  
                    <TextInfoStyled>Sprites</TextInfoStyled>
                    <div>                 
                        <img src={info.sprites.front_default} alt='sprite5' />
                        <img src={info.sprites.back_default} alt='sprite1' />
                        <img src={info.sprites.front_shiny} alt='sprite7' />              
                        <img src={info.sprites.back_shiny} alt='sprite3' />
                    </div>
                </BasicInfoStyled>
                
                <TextInfoStyled>Informações:</TextInfoStyled>
                <ContainerBotoesStyled>
                    <BotoesStyled onClick={() => setShow({padrao: 'ocultar', segunda: 'mostrar'})}>
                        Movimentos
                    </BotoesStyled>
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