import * as React from "react";
import "./ImageText.css";

function SocialImpactSection2() {
  return (
    <section className="impact-section mindset-section">
      <div className="image-right">
        <div className="text-content mindset-content">
          <h1 className="title2">A cooperative mindset</h1>
          <p className="paragraph">
            Elewa has one shared objective; To unlock the true potential of
            individuals, teams, and the community. We believe strongly in the
            power of sharing ideas and continuously strive to grow each other
            and ourselves. Internally, but also within the larger communities in
            which we are active.
          </p>
        </div>
        <div>
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

export default SocialImpactSection2;
