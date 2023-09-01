import { List } from './Statistics.style';

export const Statictics = ({
  positiveFeedback = 0,
  totalFeedback = 0,
  value: { good, neutral, bad },
}) => {
  return (
    <>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedback}%</li>
      </List>
    </>
  );
};
