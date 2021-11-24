import React from 'react'
import { connect } from 'react-redux'
import { CgPokemon } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import Header from '../header'
import changeCards from './../../store/action/cardsA'

import { 
    ContainerCardStyled, ContainerPageStyled, LoadStyled, ContainerNav 
} from './styled'

const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
let page = 0

function PokeCards({ cards, changeCards }){

    React.useEffect(()=>{
        changeCards()
    }, [changeCards])
    
    const handlerPage = (action) => { 
        if(action === 1){
            if(page > 0)
                page = page-1
            else
                page = 0
        }else{
            page = page+1
        }        
        changeCards(page)
    }

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
                <ContainerNav>
                    <button onClick={() => handlerPage(1)}>Anterior</button>
                    <button onClick={() => handlerPage(2)}>Proxima</button>
                </ContainerNav>
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