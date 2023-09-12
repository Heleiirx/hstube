import {React, useState, useEffect} from "react"
import "./Select.css"
import { api } from "../../Api"

function Select (props){

    const inputChange = (e) => {
        props.updateValue(e.target.value)
    }

    const [categories, setCategories] = useState([])

    useEffect(()=>{
            api.get(`/categories`)
           .then( res => setCategories(res.data))
        
    }, [])

    return <div className="selectContainer">
        <select name={props.title} id="" onChange={inputChange} value={props.value} >
            <option value="" defaultValue="" hidden>{props.title}</option>
            {
                categories.map((category) => {
                    return <option key={category.id}>{category.title}</option>
                })
            }
        </select>
        <span></span>
    </div>
}


export default Select