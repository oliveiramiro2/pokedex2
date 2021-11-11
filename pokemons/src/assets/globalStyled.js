import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    body {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }
`

export default globalStyle