import {React, useState} from "react"
import { api } from "../../Api"
import "./NewCategory.css"
import Input from "../input"
import Textarea from "../TextArea"
import Button from "../button"
import ColorInput from "../ColorInput"


function NewCategoryForm (){

    const [title, setTitle] = useState()
    const [color, setColor] = useState()
    const [description, setDescription] = useState()
    const [user, setUser] = useState()


    const ManageAddClass = (e) => {
        e.preventDefault()
        console.log({title, color, description, user})
        api.post(`/categories`, {
            title,
            color,
            description, 
            user
        })
        .then((response)=> alert(`Se ha creado la clase ${title}`))
    }

    return <form className="NewCategory" onSubmit={ManageAddClass} >
        <h1>Nueva Categoría</h1>
        <Input title="Titulo" updateValue={setTitle} />
        <ColorInput title="Color" updateValue={setColor} />
        <Textarea title="Descripción" updateValue={setDescription} />
        <Input title="Usuario" updateValue={setUser} />
        <section className="form__button">
                <Button title="Guardar" type="submit" />
                <Button title="Limpiar" type="reset" />
        </section>
    </form>
}

export default NewCategoryForm