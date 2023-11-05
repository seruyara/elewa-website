/* Import the necessary modules from the 'react' library */
import * as React from 'react';
import "./homepage.css";

/* Import the 'Header' component from the relative path './Header' */
import Header from "./Header";

/* Define the SocialImpactHomepage component */
function SocialImpactHomepage() {
    return(
        /* Render a section element */
        <section className=''>
            {/* Render a div with classes 'homepage-container' for styling */}
            <div className='homepage-container'>
                /* Render the 'Header' component, which may contain navigation or page header content */
                <Header />
                /* Render a div with class 'homepage-content' */
                <div className='homepage-content'>
                    <div className='homepage-text' >
                        {/* Render an h2 element with the text 'Scaling impact. Beyond the norm' and the class 'subtitle' */}
                        <h2 className='subtitle'>Scaling impact. Beyond the norm</h2>
                        {/* Render an h1 element with multi-line text and the class 'homepage-title' */}
                        <h1 className='homepage-title'>Human and Environmental Impact <br /> through Social Enterprise</h1>
                    </div>
                </div>
            </div>
        </section>
    );
 }

/* Export the SocialImpactHomepage component so that it can be used in other parts of the application */
export default SocialImpactHomepage;
