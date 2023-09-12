import Carousel from "../carousel"
import "./Section.css"

function Section ({title, videos, color, description}){

    const titleColor = { color: color}

    return <>
    {
        videos.length>0 && <div className="Section">
        <div className='text'>
                <h1 style={titleColor} >{title}</h1> 
                <p>{description}</p>
        </div>
        <Carousel title={title} videos={videos} color={color} />
    </div>
    }
    </> 
}


export default Section