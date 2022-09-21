import { Section as StyledSection, SectionHeader, Title } from "./styled";

const Section = ({ title, body, extraContent }) => (
  <StyledSection>
    <SectionHeader>
      <Title>
        {title}
      </Title>
      {extraContent}
    </SectionHeader>
    {body}
  </StyledSection>
);

export default Section;