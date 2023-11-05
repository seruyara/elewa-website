import * as React from 'react'
import AboutUsBottom from './AboutUsBottom';
import AboutUsHomepage from './AboutUsHomepage';
import Footer from './Footer';

function AboutUs(){
    return(
        <div className='about'>
           <AboutUsHomepage/>
           <AboutUsBottom/>
           <Footer/>
        </div>
    );
}

export default AboutUs