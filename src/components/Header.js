import React from "react";
import NavBar from "./NavBar";
import './Header.css'

function Header(){
    return(
        <header className="main-header">
            <h1 className="logo">elewa group</h1>
             <NavBar/>
        </header>
    );
}

export default Header;
