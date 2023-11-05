/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Import CSS styles from the 'ImageText.css' file */
import "./ImageText.css";

/* Define the SocialImpactSection4 component */
function SocialImpactSection4() {
  return (
    /* Render a section element with the class 'impact-section' for styling */
    <section className="impact-section">
      <div className="image-right">
        <div className="text-content white">
          {/* Render an h1 element with the text 'Open knowledge' and class 'title2' */}
          <h1 className="title2">Open knowledge</h1>
          {/* Render a paragraph element with a description text */}
          <p className="paragraph">
            What we learn, we share. Through community events, open knowledge
            repositories, regular teaching moments (everyone a teacher) and
            academic partnerships.
          </p>
          <p className="paragraph">
            We build for today, with a lens on tomorrow.
          </p>
          <p className="paragraph">
            We build for today, with a lens on tomorrow.
          </p>
        </div>
        <div className="image-content">
          {/* Render an image with a source URL and class 'img' */}
          <img
            className="img"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
          />
        </div>
      </div>
    </section>
  );
}

/* Export the SocialImpactSection4 component so that it can be used in other parts of the application */
export default SocialImpactSection4;
