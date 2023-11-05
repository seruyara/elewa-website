import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Invest from './components/Invest';
import SocialImpact from './components/SocialImpact';


function App() {
  return (
    <Router>
      <div>
        <Routes>
         <Route path='social-impact' element={<SocialImpact/>}/>
         <Route path='invest' element={<Invest/>}/>
         <Route path='about' element={<AboutUs/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
