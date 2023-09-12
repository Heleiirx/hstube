import { AiOutlinePlusCircle, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar (){
    return <div className='navbar'>
        <Link to="/"> <img src='/img/logo.svg' alt="HStube" /> </Link>
        <div className='AddButtons' >
            <Link id='Add'  > <AiOutlinePlusCircle color='#191919'/> <p className='addText'>Añadir</p> </Link>
            <Link id='AddVideo' to="/addVideo" > <AiOutlineVideoCameraAdd color='#191919'/> <p className='addText'>Video</p> </Link>
            <Link id='AddCategory' to="/addCategory" > <BiCategory color='#191919'/> <p className='addText'>Categoría</p> </Link>
        </div>
    </div>
}


export default Navbar