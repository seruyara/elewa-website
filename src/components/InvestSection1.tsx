/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Import CSS styles from the 'ImageText.css' file */
import "./ImageText.css";

/* Define the InvestSection1 component */
function InvestSection1() {
  return (
    /* Render a section element */
    <section>
      <div className="text-image">
        <div className="bigger">
          <h5 className="title2">How we see it differently</h5>
          <p className="paragraph">
            The global South is rapidly catching up with the "developed" world.
            It's time for you to get to know the rapid development, innovation,
            and drive going on in this part of the world (East-Africa, South
            Asia, and beyond).
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
            alt="elewaimage"
            className="image-content"
          />
        </div>
      </div>
    </section>
  );
}

/* Export the InvestSection1 component so that it can be used in other parts of the application */
export default InvestSection1;
