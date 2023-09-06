import { Statictics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //* Оновлює стан, додаючи одиницю до відповідного значення.
  const handleCount = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  //* Підраховує загальну кілкість відгуків
  const countTotalFeedback = () => good + neutral + bad;

  //* Підраховує відсоток хороших
  const countPositiveFeedbackPercentag = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentag();

  return (
    <>
      <Section title="Pleace leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleCount}
        />
      </Section>

      <Section title="Statisics">
        {totalFeedback > 0 ? (
          <Statictics
            value={{ good, neutral, bad }}
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
