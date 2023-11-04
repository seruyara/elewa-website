import * as React from "react";
import SocialImpactSection2 from "./SocialImpactSection2";

function Footer() {
  return (
    <div>
      <SocialImpactSection2 />
      <footer>
        <div className="footer"></div>
        <div className="footer-content">
          <div className="footer-navigations">
            <div className="headquaters">
                <h4>Headquarters</h4>
                <p className="hq">The Promenade, 19 General <br />
                   Mathenge Rd <br />
                   Nairobi, Kenya     
                </p>
            </div>
            <div className="contact">
               <h4>Contact</h4>
               <p>T +254 78 92 27 755 <br />
                  E info@elewa.ke
               </p>
            </div>
            <div className="activities">
                <h4>Navigation</h4>
                <p>
                About us
                Social impact
                Invest
                News
                Contact
                </p>
            </div>
            <div className="brands">
                <h4>Brands</h4>
                <p>
                Elewa <br />
                Italanta <br />
                Venture labs <br />
                </p>
            </div>
            <div className="privacy">
                <h4>Privacy</h4>
                <p>
                Terms and conditions <br />
                Cookie preferences <br />
                </p>
            </div>
          </div>
          <div className="footer-imgs">
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg" alt="logo" className="logo"/>
          <div className="icons">
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg" alt=""/>
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg" alt=""/>
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg" alt=""/>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
