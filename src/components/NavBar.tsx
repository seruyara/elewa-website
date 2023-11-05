/* Import the necessary modules from the 'react' library */
import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/* Define the NavBar component */
function NavBar() {
    return (
        /* Render a navigation container with the class 'nav-container' */
        <nav className="nav-container">
            <ul>
                {/* Render an unordered list with list items, each containing a Link element to navigate to different routes */}
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

/* Export the NavBar component so that it can be used in other parts of the application */
export default NavBar;
