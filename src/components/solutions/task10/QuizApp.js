import React, { useState } from "react";
import { quiz } from "./questions";

function QuizApp() {
  // keep track of the  active question
  // keep track of the selected answer,
  // and keep track of the result in which we should track the num of correct answers,wrong answers,and the score of the player

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
        <div>
          <h3>Question: {question} </h3>
          <ul>
            {choices.map((choice, i) => (
              <li onClick={() => onSelectedAnswer(choice, i)} key={choice}>
                {choice}
              </li>
            ))}
          </ul>

          <div>
            <button
              onClick={handleNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "finish" : "next"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Results</h3>
          <h4>Total Questions : {questions.length}</h4>
          <h4>Total Score:{result.score}</h4>
          <h4>Correct Answers: {result.correctAnswers}</h4>
          <h4>Wrong Answers: {result.wrongAnswers}</h4>
        </div>
      )}
    </div>
  );
}
export default QuizApp;
