import { Component } from 'react';
import { Statictics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //* Оновлює стан, додаючи одиницю до відповідного значення.
  handleCount = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  //* Підраховує загальну кілкість відгуків
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  //* Підраховує відсоток хороших
  countPositiveFeedbackPercentag = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentag();

    return (
      <>
        <Section title="Pleace leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleCount}
          />
        </Section>

        <Section title="Statisics">
          {totalFeedback > 0 ? (
            <Statictics
              value={this.state}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
