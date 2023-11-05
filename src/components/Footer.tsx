/* Import the necessary modules from the 'react' library */
import * as React from 'react';

/* Define the Footer component */
function Footer() {
  return (
    <section>
      <footer className="footer-box">
        <div className="footer-content white">
          <div className="footer-navigations">
            <div className="headquarters foot-box">
              <h4 className="foot-title">Headquarters</h4>
              <p className="foot-text">
                The Promenade, 19 General Mathenge Rd <br />
                Nairobi, Kenya <br />
              </p>
            </div>
            <div className="contact foot-box">
              <h4 className="foot-title">Contact</h4>
              <p className="foot-text">T +254 78 92 27 755</p>
              <p className="foot-text"> E info@elewa.ke</p>
            </div>
            <div className="activities foot-box">
              <h4 className="foot-title">Navigation</h4>
              <p className="foot-text"> About us </p>
              <p className="foot-text"> Social impact </p>
              <p className="foot-text">  Invest </p>
              <p className="foot-text">  News  </p>
              <p className="foot-text"> Contact  </p>
            </div>
            <div className="brands foot-box">
              <h4 className="foot-title">Brands</h4>
              <p className="foot-text"> Italanta </p>
              <p className="foot-text"> Elewa </p>
              <p className="foot-text"> Venture labs </p>
            </div>
            <div className="privacy foot-box">
              <h4 className="foot-title">Privacy</h4>
              <p className="foot-text"> Terms and conditions </p>
              <p className="foot-text">  Cookie preferences  </p>
            </div>
          </div>
          <div className="footer-imgs logo-flex">
            <img
              className="footer-logo"
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
              alt="logo"
            />
            <div className="icons">
              <img
                className="logo"
                src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg"
                alt=""
              />
              <img
                className="logo"
                src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/_Social/instagram_x8ujcq.svg"
                alt=""
              />
              <img
                className="logo"
                src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

/* Export the Footer component so that it can be used in other parts of the application */
export default Footer;
