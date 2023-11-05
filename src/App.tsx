import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
// import AboutUs from './components/AboutUs';
// import Invest from './components/Invest';
import InvestSection6 from './components/InvestSection6';
// import SocialImpact from './components/SocialImpact';


function App() {
  return (
    <Router>
      <InvestSection6/>
      <div>
        <Routes>
         {/* <Route path='social-impact' element={<SocialImpact/>}/> */}
         {/* <Route path='invest' element={<Invest/>}/> */}
         {/* <Route path='about' element={<AboutUs/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
