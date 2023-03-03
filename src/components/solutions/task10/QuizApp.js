import React, { useState } from "react";
import { quiz } from "./questions";

function QuizApp() {
  // keep track of the  active question
  // keep track of the selected answer,
  // and keep track of the result in which we should track the num of correct answers,wrong answers,and the score of the player

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  //   function handleNext(){

  //   }

  const { questions } = quiz;
  return (
    <div>
      <h1>Quiz App</h1>
      <h3>Question: {questions[activeQuestion].question} </h3>
      {questions[activeQuestion].choices.map((choice, i) => (
        <button key={i}>{choice}</button>
      ))}

      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
export default QuizApp;
