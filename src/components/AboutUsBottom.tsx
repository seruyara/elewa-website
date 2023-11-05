/* Import the necessary modules from the 'react' library */
import * as React from 'react';

/* Import CSS styles from the 'homepage.css' file */
import "./homepage.css";

/* Define the AboutUsBottom component */
function AboutUsBottom() {
    return (
        /* Render a div with the class 'impact' */
        <div className='impact'>
            <div className='lower-container '>
                {/* Render a span with the class 'big-text' and the text 'Learn more about' */}
                <span className='big-text'>Learn more about</span>

                {/* Render another span with the class 'big-text right' containing a link */}
                <span className='big-text right'>
                    {/* Render a link with the class 'bold' and a 'href' attribute linking to a URL (replace 'link' with the actual URL) */}
                    <a className='bold' href="link"> Elewa's social impact</a>
                </span>
            </div>
        </div>
    );
}

/* Export the AboutUsBottom component so that it can be used in other parts of the application */
export default AboutUsBottom;
