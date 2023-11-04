import * as React from "react";
import SocialImpactHomepage from "./SocialImpactHomepage";
import SocialImpactSection1 from "./SocialImpactSection1";
import SocialImpactSection2 from "./SocialImpactSection2";
import SocialImpactSection3 from "./SocialImpactSection3";
import SocialImpactSection4 from "./SocialImpactSection4";

function SocialImpact() {
  return (
    <div>
      <SocialImpactHomepage />
      <SocialImpactSection1 />
      <SocialImpactSection2/>
      <SocialImpactSection3/>
      <SocialImpactSection4/>
    </div>
  );
}

export default SocialImpact;
