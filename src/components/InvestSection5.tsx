/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Define the InvestSection4 component */
function InvestSection4() {
  return (
    /* Render a section element with classes 'impact-section', 'mindset-section', and 'beyond-section' for styling */
    <section className="impact-section mindset-section beyond-section">
      {/* Render a div with the class 'image-right' */}
      <div className="image-right">
        <div className="text-content right-content">
          {/* Render an h1 element with the text 'The Elewa Creative Hub' */}
          <h1 className="title2">The Elewa Creative Hub</h1>
          {/* Render a paragraph element with a description text */}
          <p className="paragraph">
            Coming soon; The Elewa Creative Hub Lies at the heart of our
            organization. A two-acre property at the center of Nairobi's
            creative district, the hub connects all Elewa's Activities under a
            single banner.
          </p>
          {/* Render another paragraph element with a description text */}
          <p className="paragraph">
            Through partnerships with the creative community, the Elewa Hub will
            organize vibrant activities that bring talents from different fields
            (tech, business, art, fashion) together to nurture continuous
            innovation.
          </p>
        </div>
        <div>
          <img
            className="img"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"
          />
        </div>
      </div>
    </section>
  );
}

/* Export the InvestSection4 component so that it can be used in other parts of the application */
export default InvestSection4;
