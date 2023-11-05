import * as React from "react";
import "src/components/ButtonSec.css";

function InvestSection5() {
  return (
    <section>
      <div className="image-left">
        <div className="image-content">
          <img
            className="img"
            alt="pic"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg"
          />
        </div>
        <div className="text-content">
          <h1 className="title2 black">Investing in Elewa NV</h1>
          <p className="paragraph black">
            From time to time, we offer investment opportunities (private equity
            & debt) to out community of investors. Interested to take part when
            this opportunity arrives?
          </p>
          <div className="section-button">
            <button className="button-animation">
              <span>Join the waiting list</span>
              <section className="arrow-container">
                <svg
                  id="arrow-right"
                  className=""
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-right-long"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                  ></path>
                </svg>
              </section>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestSection5;
