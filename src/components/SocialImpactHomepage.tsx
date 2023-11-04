 import * as React from 'react'
 import "./homepage.css";
 import Header from "./Header";





 function SocialImpactHomepage() {
    return(
        <section className='' >
            <div className='homepage-container'>
                <Header />
                <div className='homepage-content'>
                <div className='homepage-text' >
                    <h2 className='subtitle'>Scaling impact. Beyond the norm</h2>
                    <h1 className='homepage-tittle'>Human and Environmental Impact <br /> through Social Enterprise</h1>
                </div>
                </div>
            </div>
        </section>
    );
 }

 export default SocialImpactHomepage;