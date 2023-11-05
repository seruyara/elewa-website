/* Import the necessary modules from the 'react' library */
import * as React from 'react';

/* Import CSS styles from the 'homepage.css' file */
import './homepage.css';

/* Define the InvestSection6 component */
function InvestSection6() {
    return (
        /* Render a div element with the class 'impact' */
        <div className='impact'>
            <div className='lower-container '>
                {/* Render a span element with the class 'big-text' and the text 'Become part of our mission.' */}
                <span className='big-text'>  Become part of our mission. </span>
                {/* Render another span element with the class 'big-text right' */}
                <span className='big-text right'> and start
                    {/* Render a link ('a' element) with a class 'bold' and an 'href' attribute pointing to "link" */}
                    <a className='bold' href="link">investing</a>
                </span>
            </div>
        </div>
    );
}

/* Export the InvestSection6 component so that it can be used in other parts of the application */
export default InvestSection6;
