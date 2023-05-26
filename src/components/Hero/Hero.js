import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I’ve been working as a web developer for a few years now, and I’m
          passionate about everything that goes into making websites work well
          and look beautiful. The web is my passion because it’s where I can
          find the most exciting projects to work on. I also love making my
          clients happy with their site’s performance, so they can see it on any
          device they have.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
