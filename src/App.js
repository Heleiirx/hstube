import Navbar from './components/navbar/Navbar';
import Home from './pages/home';
import Footer from './components/footer';
import NewVideo from './pages/New video';
import NewCategory from './pages/New Category';
import VideoDetails from './pages/VideoDetails';
import EditVideoForm from "./components/EditVideoForm"
import Page404 from './pages/Page404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addVideo' element={<NewVideo/>} />
      <Route path='/addCategory' element={<NewCategory/>} />
      <Route path='/videos/:id' element={<VideoDetails/>} />
      <Route path='/editVideo/:id' element={<EditVideoForm/>} />
      <Route path='*' element={<Page404/>} />
     </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
