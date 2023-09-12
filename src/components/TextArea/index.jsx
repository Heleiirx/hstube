import "./TextArea.css"

function Textarea (props){

    const inputChange = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className="TextareaContainer">
        <textarea type="text" required="required" onChange={inputChange} value={props.value} />
        <label>{props.title}</label>
        <span></span>
    </div>
}

export default Textarea