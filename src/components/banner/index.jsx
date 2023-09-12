import {React, useState, useEffect} from "react"
import {api} from "../../Api"
import "./Banner.css"
import Button from "../../components/button"
import Title from "../../components/Title"
import VideoMid from "../VideoMidSize"

function Banner(){

    const [video, setVideo] = useState([]);

    useEffect(()=>{
        api.get(`/videos/40`)
        .then((response)=>setVideo(response.data))
    }, [])

    return <div className="banner">
        <div className="banner-main">
            <VideoMid video={video} />
            <Title title={video.title} />
            <p>{video.description}</p>
            <a href={video.link}>
                <Button title="Ver video" />
            </a>
        </div>
    </div>
}


export default Banner