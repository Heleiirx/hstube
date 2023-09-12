import {React, useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../Api"
import Input from "../input"
import Textarea from "../TextArea"
import Button from "../button"
import Select from "../select"

function EditVideoForm ({url}){

    const [title, setTitle] = useState()
    const [link, setLink] = useState()
    const [img, setImg] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [user, setUser] = useState()

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        api.get(`/videos/${id}`)
      .then((response) => {
        setTitle(response.data.title)
        setLink(response.data.link)
        setImg(response.data.img)
        setCategory(response.data.category)
        setDescription(response.data.description)
        setUser(response.data.user)
      })
      .catch((error) => console.log(error));
    },[])


    const ManageEditVideo = (e) => {
        e.preventDefault()
        api.put(`/videos/${id}`, {
            title,
            link,
            img,
            category,
            description, 
            user
        })
        .then((response)=>{
            navigate(`/videos/${id}`)
        })
    }

    return <div>
        <form className="VideoForm" onSubmit={ManageEditVideo} >
            <h1>Nuevo video</h1>
            <Input title="Título" updateValue={setTitle} value={title} />
            <Input title="Link del video" updateValue={setLink} value={link} />
            <Input title="Link de la imagen" updateValue={setImg} value={img} />
            <Select title="Categoría" updateValue={setCategory} value={category} />
            <Textarea title="Decripción" updateValue={setDescription} value={description} />
            <Input title="Usuario" updateValue={setUser} value={user} />
            <section className="form__button">
                <Button title="Enviar cambios" type="submit" />
            </section>
        </form>
    </div>
}



export default EditVideoForm