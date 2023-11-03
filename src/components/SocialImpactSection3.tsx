import * as React from "react";
import "./ImageText.css";

function SocialImpactSection3(){
    return(
    <section className="impact-section beyond-section">
        {/* <div className="image-left">
            <div>
            <img
        alt="boy"
        className="img"
        src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"/>
            </div>
        </div>
        <div className="text-content">
            <h1 className="title2">Beyond business</h1>
            <p className="paragraph">We channel a good amount of our resources into giving back.</p>
            <p>Through projects such as our coding school in Kakuma refugee camp, 
    training teachers in pastoral Samburu and our open-source coding 
    initiatives providing entry-level opportunities to hundreds of junior engineers</p>
    <p>These projects don't necessarily have an immediate financial return, 
        but their impact can be tangibly measured in the long-term.</p>
        </div> */}
       <div className="image-left">
        <div className="image-content">
        <img
        alt="boy"
        className="img"
        src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"/>
        </div>
        <div className="text-content">
          <h1 className="title2 black">Beyond business</h1>
          <p className="paragraph black">We channel a good amount of our resources into giving back.</p>
            <p className="paragraph black">Through projects such as our coding school in Kakuma refugee camp, 
    training teachers in pastoral Samburu and our open-source coding 
    initiatives providing entry-level opportunities to hundreds of junior engineers</p>
    <p className="paragraph black">These projects don't necessarily have an immediate financial return, 
        but their impact can be tangibly measured in the long-term.</p>
        </div>
      </div>
    </section>
    );
}

export default SocialImpactSection3;