import {React, useState} from "react"
import { api } from "../../Api"
import "./Form.css"
import Input from "../input"
import Textarea from "../TextArea"
import Button from "../button"
import Select from "../select"

function NewVideoForm (){

    const [title, setTitle] = useState()
    const [link, setLink] = useState()
    const [img, setImg] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [user, setUser] = useState()


    const ManageAddVideo = (e) => {
        e.preventDefault()
        console.log({title,
            link,
            img,
            category,
            description, 
            user})
        api.post(`/videos`, {
            title,
            link,
            img,
            category,
            description, 
            user
        })
        .then((response)=> alert(`Se ha creado el video ${title}`))
    }

    return <div>
        <form className="VideoForm" onSubmit={ManageAddVideo} >
            <h1>Nuevo video</h1>
            <Input title="Título" updateValue={setTitle} />
            <Input title="Link del video" updateValue={setLink} />
            <Input title="Link de la imagen" updateValue={setImg} />
            <Select title="Categoría" updateValue={setCategory} />
            <Textarea title="Decripción" updateValue={setDescription} />
            <Input title="Usuario" updateValue={setUser} />
            <section className="form__button">
                <Button title="Guardar" type="submit" />
                <Button title="Limpiar" type="reset"/>
            </section>
        </form>
    </div>
}



export default NewVideoForm