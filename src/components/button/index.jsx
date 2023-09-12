import "./Button.css"

function Button(props){
    return <button className="button" type={props.type}>
        {props.title}
    </button>
}


export default Button