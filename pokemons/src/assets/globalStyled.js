import { createGlobalStyle } from 'styled-components'
import BackgroundPhoto from './imgs/poke_background.jpg'

const globalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    body {
        overflow-x: hidden;
        background: url(${BackgroundPhoto}) no-repeat fixed;
        background-size: cover;
    }

    a {
        text-decoration: none;
    }
`

export default globalStyle