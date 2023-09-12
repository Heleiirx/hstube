import "./ColorInput.css"

function ColorInput (props){

    const inputChange = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className="ColorInput">
            <input type="color" required="required" onChange={inputChange} />
            <label>{props.title}</label>
            <span></span>
        </div>
}

export default ColorInput