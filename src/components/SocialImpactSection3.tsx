/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Import CSS styles from the 'ImageText.css' file */
import "./ImageText.css";

/* Define the SocialImpactSection3 component */
function SocialImpactSection3() {
  return (
    /* Render a section element with the classes 'impact-section' and 'beyond-section' for styling */
    <section className="impact-section beyond-section">
      {/* Render a div with the class 'image-left' for the image and text content */}
      <div className="image-left">
        <div className="image-content">
          {/* Render an image with an alternative text, class 'img', and source URL */}
          <img
            alt="boy"
            className="img"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
          />
        </div>
        <div className="text-content">
          {/* Render an h1 element with the text 'Beyond business' and class 'title2 black' */}
          <h1 className="title2 black">Beyond business</h1>
          {/* Render a paragraph element with a description text */}
          <p className="paragraph black">
            We channel a good amount of our resources into giving back.
          </p>
          <p className="paragraph black">
            Through projects such as our coding school in Kakuma refugee camp,
            training teachers in pastoral Samburu and our open-source coding
            initiatives providing entry-level opportunities to hundreds of
            junior engineers
          </p>
          <p className="paragraph black">
            These projects don't necessarily have an immediate financial return,
            but their impact can be tangibly measured in the long-term.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Export the SocialImpactSection3 component so that it can be used in other parts of the application */
export default SocialImpactSection3;
