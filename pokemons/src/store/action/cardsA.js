import axios from 'axios'

export default async function changeCards(){
    const { data } = await axios.get('localhost:3001/pokemons')
    const payload = data
    
    return{
        type: "TROCA_CARDS",
        payload
    }
}