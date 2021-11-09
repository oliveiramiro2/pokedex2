const express = require('express')
const buscar = require('../pokeApi/index')

const router = express.Router()

router.get('/pokemon:num?', (req, res) => {
    console.log("ok", req.params())
})

module.exports = app => app.use("/info", router)