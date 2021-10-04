import React, { useState } from "react";
import FeedbackOptions from "./feedback/feedbackOptions/FeedbackOptions";
import Statistics from "./feedback/statistics/Statistics";
import Section from "./section/Section";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [state, setState] = useState(initialState);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const onBtnClick = (event) => {
    const name = event.target.name;
    setState((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  return (
    <>
      <Section title="Leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onBtnClick={onBtnClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
