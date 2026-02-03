import axios from 'axios'

const gamesFromAPI = axios.create({baseURL: "http://localhost:8000/games"})

async function getGames(){
    const response = await gamesFromAPI.get('/')
    return response.data
}

export {
    getGames
}