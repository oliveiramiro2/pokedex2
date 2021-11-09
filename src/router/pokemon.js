const express = require('express')
const buscar = require('../pokeApi/index')

const router = express.Router()

router.get('/pokemon', async (req, res) => {
    const data = await buscar("/pokemon/"+String(req.query.num))
    res.send(data.name)
})

module.exports = app => app.use("/info", router)