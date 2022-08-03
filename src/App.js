
import Contact from './Contact';
import Skills from './Skills';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/skills" element={<Skills/>}/>
 </Routes>
  </BrowserRouter>
  
  </>
  
 )
}

export default App;
