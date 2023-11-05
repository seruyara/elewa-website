/* Import the necessary modules from the 'react' library */
import * as React from 'react';

/* Import the 'Header' component from the relative path './Header' */
import Header from './Header';

/* Import CSS styles from the 'homepage.css' file */
import "./homepage.css";

/* Define the InvestHomepage component */
function InvestHomepage() {
    return (
        /* Render a section element */
        <section>
            <div className='homepage-container invent-cover'>
                <Header />
                <div className='homepage-content'>
                    <div className='homepage-text'>
                        <h2 className='subtitle'>Trade, not aid</h2>
                        <h1 className='homepage-title'>Southern innovations addressing <br /> global problems</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Export the InvestHomepage component so that it can be used in other parts of the application */ 
export default InvestHomepage;
