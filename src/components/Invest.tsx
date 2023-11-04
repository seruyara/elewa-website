import * as React from 'react'
import Footer from './Footer';
import InvestHomepage from './InvestHomepage';


function Invest(){
    return(
        <div className='invest'>
         <InvestHomepage/>
         <Footer/>
        </div>
    );
}

export default Invest;