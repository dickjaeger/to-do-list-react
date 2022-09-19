import { Section as StyledSection, SectionHeader } from "./styled"

const Section = (props) => (
  <StyledSection>
    <SectionHeader>
      <h2>
        {props.title}
      </h2>
      {props.extraContent}
    </SectionHeader>
    {props.body}
  </StyledSection>
);

export default Section;