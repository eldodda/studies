import axios from 'axios'

const favsFromAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavos(){
    const response = await favsFromAPI.get('/')
    return response.data
}

async function postFavos(id) {
    await favsFromAPI.post(`/${id}`);
}

async function deleteFavos(id){
    await favsFromAPI.delete(`/${id}`);
}

export {
    getFavos,
    postFavos,
    deleteFavos
}