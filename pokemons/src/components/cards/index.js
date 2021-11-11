import React from 'react'
import { connect } from 'react-redux'

import { ContainerCardStyled, ContainerPageStyled } from './styled'
import changeCards from './../../store/action/cardsA'

const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

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
                        <img 
                            src={`${urlImg}${poke.url.slice(34, -1)}.png`} alt='poke-img' />
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