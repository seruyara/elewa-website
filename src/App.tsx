import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
import SocialImpactSection4 from './components/SocialImpactSection4';


function App() {
  return (
    <Router>
      <SocialImpactSection4/>
      <div>
        <Routes>
         {/* <Route path='/navbar' element={<NavBar/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
