import React from 'react'
import { connect } from 'react-redux'

import { ContainerCardStyled, ContainerPageStyled } from './styled'
import changeCards from './../../store/action/cardsA'

function PokeCards({ cards, changeCards }){

    React.useEffect(()=>{
        changeCards()
    }, [changeCards])

    console.log(cards, 'ok')

    if(cards){
        return(
            <ContainerPageStyled>
                {cards.results.map((poke, id) => {
                    return(
                    <ContainerCardStyled key={id}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.slice(34, -1)}.png`} />
                        <p>{poke.name}</p>
                    </ContainerCardStyled>
                    )
                })}               
            </ContainerPageStyled>
        )
    }else{
        return(
            <div>
                <p>Carregando...</p>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return{
        cards: state.cards.cards
    }
}

export default connect(mapStateToProps, { changeCards })(PokeCards)