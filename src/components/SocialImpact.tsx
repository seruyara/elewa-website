/* Import the necessary modules from the 'react' library */
import * as React from "react";
import Footer from "./Footer";
import SocialImpactHomepage from "./SocialImpactHomepage";
import SocialImpactSection1 from "./SocialImpactSection1";
import SocialImpactSection2 from "./SocialImpactSection2";
import SocialImpactSection3 from "./SocialImpactSection3";
import SocialImpactSection4 from "./SocialImpactSection4";
import SocialImpactSection5 from "./SocialImpactSection5";

/* Define the SocialImpact component */
function SocialImpact() {
  return (
    /* Render a div with the class 'social-impact' */
    <div className="social-impact">
      <SocialImpactHomepage />
      <SocialImpactSection1 />
      <SocialImpactSection2 />
      <SocialImpactSection3 />
      <SocialImpactSection4 />
      <SocialImpactSection5 />
      <Footer />
    </div>
  );
}

/* Export the SocialImpact component so that it can be used in other parts of the application */
export default SocialImpact;
