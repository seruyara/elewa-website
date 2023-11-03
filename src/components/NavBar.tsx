import * as React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/homepage">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/social-impact">Social impact</Link></li>
                <li><Link to="/invest">Invest</Link></li>
                <li><Link to="/venture-labs">Venture Labs</Link></li>
                <li><Link to="/brands">Brands</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
