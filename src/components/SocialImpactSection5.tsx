/* Import the necessary modules from the 'react' library */
import * as React from 'react';

/* Import CSS styles from the 'homepage.css' file */
import "./homepage.css";

/* Define the SocialImpactSection5 component */
function SocialImpactSection5() {
    return (
        /* Render a div element with classes 'impact' for styling */
        <div className='impact'>
            {/* Render a div element with classes 'lower-container' for further styling */}
            <div className='lower-container '>
                {/* Render a span element with the class 'big-text' and text 'Become part of our mission.' */}
                <span className='big-text'>  Become part of our mission. </span>
                {/* Render a span element with the class 'big-text right' */}
                <span className='big-text right'> and
                    {/* Render an anchor element with the class 'bold' and an 'href' attribute pointing to a link */}
                    <a className='bold' href="link">join elewa</a>
                </span>
            </div>
        </div>
    );
}

/* Export the SocialImpactSection5 component so that it can be used in other parts of the application */
export default SocialImpactSection5;
