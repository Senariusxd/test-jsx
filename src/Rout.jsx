
import { BrowserRouter, Routes, Route } from "react-router-dom";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"></link>

import App from "./App.jsx";
import About from "./components/Nav/About.jsx";
import Contact from "./components/Nav/Contact.jsx";
import Services from "./components/Nav/Services.jsx";
import './bootstrap/dist/css/bootstrap.min.css'

function Rout() {
  return (
    <BrowserRouter>
      <script src="http://localhost:8097"></script>
      {/*Barra de Navegacion */}
      <nav className="nav"> 
        <div className="logo">
          <img src="/src/components/images/logo.png" alt="Logo" />
        </div>
        <div className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="btn btn-danger">Search</button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element= {<App />}/>
        
        <Route path="/about" element= {<About />}/>
        <Route path="/services" element= {<Services />}/>
        <Route path="/contact" element= {<Contact />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default Rout;

