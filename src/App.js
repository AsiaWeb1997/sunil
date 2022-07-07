import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Blog from './page/unlocking';
import SingleBlog from './page/single-blog';
import HoneLabRed from './page/hone-lab-red';


function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route path='/about' element={< About />}></Route>
              <Route path='/unlocking' element={< Blog />}></Route>
              <Route path='/contact' element={< Contact />}></Route>
              <Route path='/single-blog/:id' element={< SingleBlog/>}></Route>
              <Route path='/hone-lab-red' element={< HoneLabRed/>}></Route>
        </Routes>        
        <Footer/>
    </Router>  
    </>
  );
}

export default App;
