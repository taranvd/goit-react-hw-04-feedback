import { SectionStyled } from './Section.style';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h1>{title}</h1>
      {children}
    </SectionStyled>
  );
};
