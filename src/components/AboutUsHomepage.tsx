import * as React from 'react'
import Header from './Header';
import "./homepage.css";

function AboutUsHomepage(){
    return(
        <section >
            <div className='homepage-container aboutus-cover'>
                <Header/>
                <div className='homepage-content '>
                <div className='homepage-text' >
                    <h2 className='subtitle'>HOW TO RECOGNIZE AN ELEWA MEMBER</h2>
                    <h1 className='homepage-tittle'>Dependable, Creative, Supportive, <br /> Open Minded and Fun*</h1>
                    <p>*SERIOUS WHEN IT MATTERS</p>
                </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsHomepage;