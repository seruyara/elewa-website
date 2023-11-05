/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Import the 'NavBar' component from the relative path './NavBar' */
import NavBar from "./NavBar";

/* Import CSS styles from the 'Header.css' file */
import "./Header.css";

/* Define the Header component */
function Header() {
  return (
    /* Render a header element with the class 'main-header' */
    <header className="main-header">
      <div className='header-container'>
        <div className="header-logo">
          <a href="/">
            <img
              className="nav-logo"
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
              alt="logo"
            />
          </a>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

/* Export the Header component so that it can be used in other parts of the application */
export default Header;
