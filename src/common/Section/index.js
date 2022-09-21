import { Section as StyledSection, SectionHeader, Title } from "./styled"

const Section = (props) => (
  <StyledSection>
    <SectionHeader>
      <Title>
        {props.title}
      </Title>
      {props.extraContent}
    </SectionHeader>
    {props.body}
  </StyledSection>
);

export default Section;