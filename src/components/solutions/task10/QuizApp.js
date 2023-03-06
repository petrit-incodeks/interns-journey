import React, { useState } from "react";
import { quiz } from "./questions";

function QuizApp() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  function handleNext() {
    setSelectedAnswerIndex(null);
    setResult((prevRes) =>
      selectedAnswer
        ? {
            ...prevRes,
            score: prevRes.score + 2,
            correctAnswers: prevRes.correctAnswers + 1,
          }
        : {
            ...prevRes,
            wrongAnswers: prevRes.wrongAnswers + 1,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setActiveQuestion(0);
      setShowResults(true);
    }
  }

  function onSelectedAnswer(answer, i) {
    setSelectedAnswerIndex(i);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  }

  return (
    <div className="Quiz">
      <h1>Quiz App</h1>
      {!showResults ? (
        <div className="Quiz-active-questions">
          <h3>Question: {question} </h3>
          <ul>
            {choices.map((choice, i) => (
              <li
                onClick={() => onSelectedAnswer(choice, i)}
                key={choice}
                className={selectedAnswerIndex === i ? "selected-answer" : null}
              >
                {choice}
              </li>
            ))}
          </ul>

          <div className="Quiz-button-container">
            <button
              onClick={handleNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "finish" : "next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="Quiz-results">
          <h3>Results</h3>
          <p>
            Total Questions : <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.correctAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
}
export default QuizApp;
