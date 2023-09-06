import { Statictics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [feedBack, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //* Оновлює стан, додаючи одиницю до відповідного значення.
  const handleCount = type => {
    setFeedBack(prevState => {
      return {
        ...prevState,
        [type]: prevState[type] + 1,
      };
    });
  };

  //* Підраховує загальну кілкість відгуків
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedBack;
    return good + neutral + bad;
  };

  //* Підраховує відсоток хороших
  const countPositiveFeedbackPercentag = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const { good } = feedBack;
    return Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentag();

  return (
    <>
      <Section title="Pleace leave feedback">
        <FeedbackOptions
          options={Object.keys(feedBack)}
          onLeaveFeedback={handleCount}
        />
      </Section>

      <Section title="Statisics">
        {totalFeedback > 0 ? (
          <Statictics
            value={feedBack}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
