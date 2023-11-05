/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Import CSS styles from the 'ImageText.css' file */
import "./ImageText.css";

/* Define the SocialImpactSection1 component */
function SocialImpactSection1() {
  return (
    /* Render a section element with the class 'impact-section' */
    <section className="impact-section">
      {/* Render a div with the class 'stats' for statistics */}
      <div className="stats">
        {/* Render individual sections for each statistic */}
        <div className="sections">
          {/* Render an h1 element with the text '733+' and the class 'value' for a statistic value */}
          <h1 className="value">733+</h1>
          {/* Render a paragraph element with the text 'People trained' and the class 'title' for the statistic title */}
          <p className="title">People trained</p>
        </div>
        <div className="sections">
          <h1 className="value">733k+</h1>
          <p className="title">Careers launched</p>
        </div>
        <div className="sections">
          <h1 className="value">200+</h1>
          <p className="title">Projects finished</p>
        </div>
        <div className="sections">
          <h1 className="value">56</h1>
          <p className="title">Investors</p>
        </div>
      </div>
      {/* Render a div with the class 'image-left' for the image and text content */}
      <div className="image-left">
        <div className="image-content">
          {/* Render an image with an alternative text, class 'img', and source URL */}
          <img
            alt="pretty-woman"
            className="img"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
          />
        </div>
        <div className="text-content">
          {/* Render an h1 element with the text '(Social) business for the win' and class 'title2' for a title */}
          <h1 className="title2">(Social) business for the win</h1>
          {/* Render a paragraph element with a description text */}
          <p className="paragraph">
            With a young dynamic population that is eager to contribute to the
            global economy, East Africa has a lot to offer to the world. Now is
            the time to nurture sustainable, inclusive, and scalable business.
            The rest will take care of itself.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Export the SocialImpactSection1 component so that it can be used in other parts of the application */
export default SocialImpactSection1;
