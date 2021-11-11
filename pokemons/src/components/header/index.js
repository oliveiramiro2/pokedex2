import React from 'react'
import { HeaderStyled } from './styled'
import { ImHome, ImSearch } from 'react-icons/im'
import { MdAccountCircle } from 'react-icons/md'

export default function Header(){
    return(
        <HeaderStyled>
            <ImHome size="1.4em" />
            <ImSearch size="1.4em" />
            <MdAccountCircle size="1.4em" />
        </HeaderStyled>
    )
}