import React from 'react';
import './index.css'; // Import CSS file for styling

const QuizReview = ({ questions, userAnswers }) => {
  return (
    <div className="quiz-review-container">
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <h3 className="question-heading">{`Question ${index + 1}: ${question.question}`}</h3>
          <p className="question-topic">Topic: {question.topic}</p>
          <div className="answer-container">
            <p className="answer-label">Correct Answer:</p>
            <p className="correct-answer">{question.answer}</p>
          </div>
          <div className="answer-container">
            <p className="answer-label">User's Answer:</p>
            <p className="user-answer">{userAnswers[index].answer}</p>
          </div>
          <p className={userAnswers[index] === question.answer ? 'correct' : 'incorrect'}>
            {userAnswers[index].answer === question.answer ? 'Correct' : 'Incorrect'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuizReview;
