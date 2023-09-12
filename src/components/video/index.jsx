import "./Video.css"
import { Link } from "react-router-dom"

function Video(props){

    // const videoClick = (e) => {
    //     e.preventDefault()
    //     console.log(`ID :::::> ${props.id}`)
    // }
    const border = { borderColor: props.color }

    return <div className="Video">
        <Link to={`videos/${props.id}`} href={props.link} >
            <img src={props.img} style={border} alt="Meet me in the halway" />  
        </Link>
    </div>
}


export default Video