import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { RxVercelLogo } from 'react-icons/rx';
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer(){

    function copyToClipboard() {
        // navigator.clipboard.writeText("itzelvargas2002@gmail.com")

      }

      const mail = "itzelvargas2002@gmail.com"
      

    return <div className="footer">
        <Link to="/"> <img src="/img/logo.svg" alt="HStube" /> </Link>
        <div className='SocialMedia'>
            <h5>Desarrollado por Itzel Vargas</h5>
            <div className='SocialMediaIcons'>
                <a href="https://github.com/Heleiirx">
                    <AiFillGithub/>
                </a>
                <a href="https://www.linkedin.com/in/itzel-romero/">
                    <AiFillLinkedin/>
                </a>
                <Link className='email' onClick={() => 
                    { navigator.clipboard.writeText(mail);}
                    
                    }>
                    <span className='tooltip' >Se copió el email al portapapeles</span>
                    <AiOutlineMail/>
                </Link>
                <a href="https://vercel.com/dashboard">
                    <RxVercelLogo/>
                </a>  
            </div>
        </div>
    </div>
}


export default Footer