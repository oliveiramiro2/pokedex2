import React from 'react'
import { connect } from 'react-redux'
import { CgPokemon } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import Header from '../header'
import { ContainerCardStyled, ContainerPageStyled, LoadStyled } from './styled'
import changeCards from './../../store/action/cardsA'

const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function PokeCards({ cards, changeCards }){

    React.useEffect(()=>{
        changeCards(5)
    }, [changeCards])
    
    if(cards){
        return(
            <div>
                <Header />
                <ContainerPageStyled>
                    {cards.results.map((poke, id) => {
                        return(                        
                        <ContainerCardStyled 
                            key={id} onClick={() => localStorage.setItem("NumeroPoke", poke.url.slice(34, -1))}
                        >
                            <Link to="/info">
                                <img src={`${urlImg}${poke.url.slice(34, -1)}.png`} alt='poke-img' />      
                                <p>{poke.name}</p>
                            </Link>
                        </ContainerCardStyled>
                        )                        
                    })}               
                </ContainerPageStyled>
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

const mapStateToProps = state => {
    return{
        cards: state.cards.cards
    }
}

export default connect(mapStateToProps, { changeCards })(PokeCards)