
import Contact from './Contact';
import Skills from './Skills';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Navbar  from './Navbar';
import Projects from './Projects';
import Myprofile from "./Myprofile";
import './App.css';

function App() {
 return(
  <>
  
  <Navbar></Navbar>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/myprofile" element={<Myprofile/>}/>
    
 </Routes>
  </BrowserRouter>
  
  </>
  
 )
}

export default App;
