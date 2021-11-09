const express = require('express')
const bodyParser = require('body-parser')
const buscar = require('./pokeApi/index')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.get("/", (req, res) => {
    res.send("tudo ok")
})

app.get("/pokemons", async (req, res) => {
    const data = await buscar('/pokemon')
    res.send(data)
})

require('./router/pokemon')(app)

const port = 3001
app.listen(port, ()=>console.log('Rodando servidor'))