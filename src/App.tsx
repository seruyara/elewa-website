import React from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Footer/>
      <div>
        <Routes>
         {/* <Route path='/navbar' element={<NavBar/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
