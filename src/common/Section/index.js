import { Section as StyledSection, SectionHeader, SectionBody, Title } from "./styled";

const Section = ({ title, body, extraContent }) => (
  <StyledSection>
    <SectionHeader>
      <Title>
        {title}
      </Title>
      {extraContent}
    </SectionHeader>
    <SectionBody>
      {body}
    </SectionBody>
  </StyledSection>
);

export default Section;