import "./Input.css"

function Input (props){

    const inputChange = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className="inputContainer">
        <input type="text" required="required" onChange={inputChange} value={props.value} />
        <label>{props.title}</label>
        <span></span>
    </div>
}


export default Input