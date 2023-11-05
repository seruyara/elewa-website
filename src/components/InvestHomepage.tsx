import * as React from 'react'
import Header from './Header';
import "./homepage.css";

function InvestHomepage(){
    return(
        <section >
            <div className='homepage-container invent-cover'>
                <Header/>
                <div className='homepage-content '>
                <div className='homepage-text' >
                    <h2 className='subtitle'>Trade, not aid</h2>
                    <h1 className='homepage-tittle'>Southern innovations addressing <br /> global problems</h1>
                </div>
                </div>
            </div>
        </section>
    );
}

export default InvestHomepage;