import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const Feedback = ({ handleCount }) => {
  return (
    <div>
      <h1>Pleace leave feedback</h1>
      <FeedbackOptions onLeaveFeedback={handleCount} />
    </div>
  );
};
