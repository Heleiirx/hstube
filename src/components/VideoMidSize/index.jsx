import {React, useState, useEffect} from "react"
import "./VideoMid.css"

function VideoMid ({video}){


    return <div className="VideoMid">
        <a href={video.link}>
            <img src={video.img} alt="Meet me in the halway" />  
        </a>
    </div>
}

export default VideoMid