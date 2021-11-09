const express = require('express')
const bodyParser = require('body-parser')
const baseUrl = require('./pokeApi/index')

const axios = require('axios')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.get("/", (req, res) => {
    res.send("tudo ok")
})

app.get("/pokemons", (req, res) => {
    axios.get(baseUrl+"pokemon").then((response) => {
        const data = response.data
        res.json(data)
    }).catch(error => {
        res.send({ Erro: 'Não foi possivel concluir a requisição' })
    })
})

const port = 3001
app.listen(port, ()=>console.log('Rodando servidor'))