import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
import SocialImpactSection2 from './components/SocialImpactSection2';


function App() {
  return (
   <Router>
    <SocialImpactSection2/>
     <div>
      <Routes>
        {/* <Route path='/navbar' element={<NavBar/>}/> */}
      </Routes>
     </div>
   </Router>
  );
}

export default App;
