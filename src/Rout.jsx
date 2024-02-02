
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Nav/Home.jsx";
import About from "./components/Nav/About.jsx";
import Contact from "./components/Nav/Contact.jsx";
import Services from "./components/Nav/Services.jsx";


function Rout() {
  return (
    <BrowserRouter>
      <nav>
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
              <button type="submit">Search</button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element= {<App />}/>
        <Route path="/home" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/services" element= {<Services />}/>
        <Route path="/contact" element= {<Contact />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default Rout;

/*
<body>
      <Header />
      <Page />
      <Footer />
    </body>*/