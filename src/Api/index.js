import axios from "axios";

export const api =  axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
    console.log(respuesta.data)
}

export const carouselSlide = async (category, setData) => {
    api.get(`/videos?category=${category}`)
    .then(res => setData(res.data))
}