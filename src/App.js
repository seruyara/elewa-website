import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
import SocialImpactSection1 from './components/SocialImpactSection1';


function App() {
  return (
   <Router>
    <SocialImpactSection1/>
     <div>
      <Routes>
        {/* <Route path='/navbar' element={<NavBar/>}/> */}
      </Routes>
     </div>
   </Router>
  );
}

export default App;
