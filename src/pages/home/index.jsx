import {React, useState, useEffect} from "react"
import Banner from "../../components/banner"
import Section from "../../components/Section"
import "./Home.css"
import { api } from "../../Api"

function Home(){

    const [categories, setCategories] = useState([])
    const [videos, setVideos ] = useState([])

    useEffect(()=>{
        api.get(`/categories`)
        .then(res => setCategories(res.data))
    }, [])
    
    useEffect(()=>{
        api.get(`/videos`)
        .then((response)=>setVideos(response.data))
    }, [])

    return <div className="home">
        <Banner></Banner>
        {
             categories.map((category) => {
                return <Section title={category.title} videos={videos.filter(video => video.category === category.title)} key={category.id} description={category.description} color={category.color} ></Section>             
            })
        }
    </div>
}



export default Home