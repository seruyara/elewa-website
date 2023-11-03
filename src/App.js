import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


function App() {
  return (
   <Router>
    <Header/>
     <div>
      <Routes>
        {/* <Route path='/navbar' element={<NavBar/>}/> */}
      </Routes>
     </div>
   </Router>
  );
}

export default App;
