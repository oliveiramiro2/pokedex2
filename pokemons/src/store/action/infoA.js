import axios from "axios"

export default async function changeInfo(num){
    const { data } = await axios.get('http://localhost:3001/info/pokemon?num='+num)
    const payload = data

    return{
        type: 'BUSCA_INFO',
        payload
    }
}