import { ButtonStyled } from './FeedbackOptions.style';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <ButtonStyled key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonStyled>
      ))}
    </>
  );
};
