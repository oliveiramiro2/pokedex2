const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const buscar = require('./pokeApi/index')

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.get("/", (req, res) => {
    res.send("tudo ok")
})

app.get("/poke", async (req, res) => {
    try{      
        const data = await buscar('/pokemon/1')
        res.json(data.types[0].type.name)
    }catch(error){
        res.send('Desculpe não foi possível buscar por este pokémon')
    }
})

app.get("/pokemons", async (req, res) => {
    const numPokePag = 20
    let tipoPoke = {
        tipo: ''
    }
    try{      
        const data = await buscar('/pokemon?offset='+req.query.page*numPokePag+'&limit=20')
        res.json(data)
    }catch(error){
        res.send('Desculpe não foi possível buscar por este pokémon')
    }
})



require('./router/pokemon')(app)

const port = 3001
app.listen(port, ()=>console.log('Rodando servidor'))