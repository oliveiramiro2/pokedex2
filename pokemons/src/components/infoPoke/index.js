import React from 'react'
import { Link } from 'react-router-dom'

import { ContainerStyled } from './styled'
import Header from '../header'

function InfoPoke(){
    return(
        <div>
            <Header />
            <ContainerStyled>
                <Link to='/cards'>funf</Link>
            </ContainerStyled>
        </div>
    )
}

export default InfoPoke