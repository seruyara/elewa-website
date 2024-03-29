/* Import the necessary modules from the 'react' library */
import * as React from "react";

/* Define the InvestSection3 component */
function InvestSection3() {
  return (
    <section className="impact-section beyond-section">
      {/* Render a div with the class 'image-left' */}
      <div className="image-left">
        <div className="image-content">
          {/* Render an image with a source URL, class 'img', and alternative text */}
          <img
            className="img"
            alt="group-pic"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
          />
        </div>
        <div className="text-content">
          {/* Render an h1 element with the class 'title2' and the text 'Elewa NV, a multi-stakeholder cooperation' */}
          <h1 className="title2 black">Elewa NV, a multi-stakeholder cooperation</h1>
          {/* Render a paragraph element with a description text and the class 'paragraph' */}
          <p className="paragraph black">
            At the heart of Elewa lies the structure Elewa NV. Based in
            Brussels, Belgium, Elewa NV is a private holding company which
            controls the assets of all Elewa activities.
          </p>
          {/* Render another paragraph element with a description text */}
          <p className="paragraph black">
            Elewa NV is owned and controlled by Elewa's founder, a small
            community of investors which share in the vision of Elewa and Elewa
            employees based throughout the activities of the group.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Export the InvestSection3 component so that it can be used in other parts of the application */
export default InvestSection3;
