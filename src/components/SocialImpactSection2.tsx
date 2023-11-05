/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Import CSS styles from the 'ImageText.css' file */
import "./ImageText.css";

/* Define the SocialImpactSection2 component */
function SocialImpactSection2() {
  return (
    /* Render a section element with the classes 'impact-section' and 'mindset-section' for styling */
    <section className="impact-section mindset-section">
      {/* Render a div with the class 'image-right' */}
      <div className="image-right">
        <div className="text-content right-content">
          {/* Render an h1 element with the text 'A cooperative mindset' and class 'title2' */}
          <h1 className="title2">A cooperative mindset</h1>
          {/* Render a paragraph element with a description text */}
          <p className="paragraph">
            Elewa has one shared objective; To unlock the true potential of
            individuals, teams, and the community. We believe strongly in the
            power of sharing ideas and continuously strive to grow each other
            and ourselves. Internally, but also within the larger communities in
            which we are active.
          </p>
        </div>
        <div>
          {/* Render an image with an alternative text, class 'img', and source URL */}
          <img
            alt="bufallo"
            className="img"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
          />
        </div>
      </div>
    </section>
  );
}

/* Export the SocialImpactSection2 component so that it can be used in other parts of the application */
export default SocialImpactSection2;
