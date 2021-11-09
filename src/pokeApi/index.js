const axios = require('axios')
const baseUrl = 'https://pokeapi.co/api/v2/'

const buscar = async (url) => {
    const { data } = await axios.get(baseUrl+url)
    return data
}

module.exports = buscar