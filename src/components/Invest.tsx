import * as React from 'react'
import Footer from './Footer';
import InvestHomepage from './InvestHomepage';
import InvestSection3 from './InvestSection3';
import InvestSection4 from './InvestSection4';


function Invest(){
    return(
        <div className='invest'>
         <InvestHomepage/>
         <InvestSection3/>
         <InvestSection4/>
         <Footer/>
        </div>
    );
}

export default Invest;