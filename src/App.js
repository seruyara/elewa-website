import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
import SocialImpact from './components/SocialImpacr';


function App() {
  return (
   <Router>
    <SocialImpact/>
     <div>
      <Routes>
        {/* <Route path='/navbar' element={<NavBar/>}/> */}
      </Routes>
     </div>
   </Router>
  );
}

export default App;
