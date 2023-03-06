import React, { useState } from "react";
import { quiz } from "./questions";

function QuizApp() {
  // keep track of the  active question
  // keep track of the selected answer,
  // and keep track of the result in which we should track the num of correct answers,wrong answers,and the score of the player

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  function handleNext() {
    // alert("go to the next question!");

    setActiveQuestion((prevQuestion) => prevQuestion + 1);
    //edge cases --
    // i need to check  if i'm in the last question
    //if i am, replace the button next with finish quiz
  }

  function onSelectedAnswer(answer) {
    if (answer === questions[activeQuestion].correctAnswer) {
      setSelectedAnswer(true);
      console.log("correct");
    } else {
      setSelectedAnswer(false);
      console.log("wrong");
    }
  }

  return (
    <div>
      <h1>Quiz App</h1>
      <h3>Question: {questions[activeQuestion].question} </h3>
      {/* change the buttons to be list items later*/}
      <ul>
        {questions[activeQuestion].choices.map((choice, i) => (
          <li onClick={() => onSelectedAnswer(choice)} key={i}>
            {choice}
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <h3>Result: {result.score}</h3>
        <h4>Correct Answers: {result.correctAnswers}</h4>
        <h4>Wrong Answers: {result.wrongAnswers}</h4>
      </div>
    </div>
  );
}
export default QuizApp;
