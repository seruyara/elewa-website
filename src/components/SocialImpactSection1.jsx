import * as React from "react";
import "./ImageText.css";

function SocialImpactSection1() {
  return (
    <section className="impact-section">
      <div className="stats">
        <div className="sections">
          <h1 className="value">733+</h1>
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
      <div className="image-left">
        <div className="image-content">
          <img
            alt="pretty-woman"
            className="img"
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
          />
        </div>
        <div className="text-content">
          <h1 className="title2">(Social) business for the win</h1>
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

export default SocialImpactSection1;
