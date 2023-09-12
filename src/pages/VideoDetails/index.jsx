import { React, useState, useEffect } from "react";
import "./VideoDetails.css";
import { AiFillHeart, AiOutlineHeart, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { api } from "../../Api";
import { useParams, useNavigate } from "react-router-dom";

function VideoDetails({ url }) {
  const [video, setVideo] = useState({});
  const [isFavorite, setIsFavorite] = useState(); 
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    api.get(`/videos/${id}`)
      .then((response) => {
        setVideo(response.data);
        setIsFavorite(response.data.favorite);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const toggleFavorite = () => {
    const updatedVideo = { ...video, favorite: !isFavorite }; 
    setVideo(updatedVideo);
    api.patch(`/videos/${id}`, { favorite: !isFavorite });
    setIsFavorite(!isFavorite);
  };

  const deleteVideo = () =>{
        api.delete(`/videos/${id}`)
        .then((response) => {
            alert("Video eliminado con éxito")
            navigate("/")

        })
        .catch((err)=>console.log(err))
    }

    const editVideo = () => {
        navigate(`/editVideo/${id}`)
    }


  return (
    <div className="videoDetails">
      <img src={video.img} />
      <h1>{video.title}</h1>
      <a href={video.link} className="Button">
        Ver Video
      </a>
      <ul className="icons">
        <li onClick={toggleFavorite}>
          <span className="tooltip">Favorito</span>
          {isFavorite ? <AiFillHeart className="icon" /> : <AiOutlineHeart className="icon" />}
        </li>
        <li onClick={deleteVideo} >
          <span className="tooltip">Eliminar</span>
          <AiOutlineDelete className="icon" />
        </li>
        <li onClick={editVideo} >
          <span className="tooltip">Editar</span>
          <AiOutlineEdit className="icon" />
        </li>
      </ul>
      <div className="text">
        <h2>Descripcion</h2>
        <p>
          Video del álbum {video.category}
          <br />
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetails;
