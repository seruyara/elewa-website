/* Import the necessary modules from the 'react' library */
import * as React from 'react';

/* Import the 'Header' component from the relative path './Header' */
import Header from './Header';

/* Import CSS styles from the 'homepage.css' file */
import "./homepage.css";

/* Define the AboutUsHomepage component */
function AboutUsHomepage() {
    return (
        /* Render a section element */
        <section>
            {/* Render a div with classes 'homepage-container' and 'aboutus-cover' for styling */}
            <div className='homepage-container aboutus-cover'>
                {/* Render the 'Header' component, which may contain navigation or page header content */}
                <Header />

                {/* Render a div with class 'homepage-content' */}
                <div className='homepage-content'>
                    <div className='homepage-text'>
                        {/* Render an h2 element with the class 'subtitle' and text */}
                        <h2 className='subtitle'>HOW TO RECOGNIZE AN ELEWA MEMBER</h2>

                        {/* Render an h1 element with the class 'homepage-title' and a multi-line text */}
                        <h1 className='homepage-title'>Dependable, Creative, Supportive, <br /> Open Minded and Fun*</h1>

                        {/* Render a paragraph element with additional information */}
                        <p>*SERIOUS WHEN IT MATTERS</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Export the AboutUsHomepage component so that it can be used in other parts of the application */
export default AboutUsHomepage;
