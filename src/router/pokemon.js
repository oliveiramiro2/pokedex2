const express = require('express')
const buscar = require('../pokeApi/index')

const router = express.Router()

router.get('/pokemon', async (req, res) => {
    try{
        const data = await buscar("/pokemon/"+String(req.query.num))
        res.send(data) 
    }catch(error){
        res.send('Desculpe não foi possível buscar por este pokémon.\n' + error.message)
    }
    
})

module.exports = app => app.use("/info", router)