/* Import the necessary modules from the 'react' library*/
import * as React from 'react';

/* Import custom components*/
import AboutUsBottom from './AboutUsBottom'; /* Import the AboutUsBottom component */
import AboutUsHomepage from './AboutUsHomepage'; /* Import the AboutUsHomepage component */
import Footer from './Footer'; /* Import the Footer component */

// Define the AboutUs component
function AboutUs() {
    return (
        /* This is the JSX code that represents the AboutUs component */
        <div className='about'>
            <AboutUsHomepage /> {/* Render the AboutUsHomepage component */}
            <AboutUsBottom /> {/* Render the AboutUsBottom component */}
            <Footer /> {/* Render the Footer component */}
        </div>
    );
}

/* Export the AboutUs component so that it can be used in other parts of the application */
export default AboutUs;
