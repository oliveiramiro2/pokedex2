import axios from 'axios'

export default async function changeCards(page=0){
    const { data } = await axios.get('http://localhost:3001/pokemons?page='+page)
    const payload = data
    
    return{
        type: "TROCA_CARDS",
        payload
    }
}