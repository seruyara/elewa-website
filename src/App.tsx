import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Invest from './components/Invest';
import SocialImpact from './components/SocialImpact';


function App() {
  return (
    <Router>
      <div>
        <Routes>
         <Route path='social-impact' element={<SocialImpact/>}/>
         <Route path='invest' element={<Invest/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
