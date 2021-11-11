import React from 'react'
import { connect } from 'react-redux'

import { ContainerCardStyled, ContainerPageStyled } from './styled'
//import { changeCards } from './../../store/action/cardsA'

function PokeCards({ cards }){

    console.log(cards, 'ok')
    return(
        <ContainerPageStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
            <ContainerCardStyled>
                ok
            </ContainerCardStyled>
        </ContainerPageStyled>
    )
}

const mapStateToProps = state => {
    return{
        cards: state.cards
    }
}

export default connect(mapStateToProps)(PokeCards)