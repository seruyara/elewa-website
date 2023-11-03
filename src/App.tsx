import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
import SocialImpactSection3 from './components/SocialImpactSection3';


function App() {
  return (
    <Router>
      <SocialImpactSection3/>
      <div>
        <Routes>
         {/* <Route path='/navbar' element={<NavBar/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
