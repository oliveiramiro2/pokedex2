import React from "react"

import Header from "../header"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div>
            <Header />
            <Link to='./cards' >ok</Link>
        </div>
    )
}