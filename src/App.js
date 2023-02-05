import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentAnswer , setCurrentAnswer] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const clickHandler = (isCorrect) => {
    if(isCorrect === true){
      setScore(score+1);
    }

    const nextQuestion = currentAnswer + 1;
    if(nextQuestion < questions.length){
      setCurrentAnswer(nextQuestion);
    } else {
      setShowScore(true);
    }
    
  }

  const resetHandler = () => {
    setCurrentAnswer(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          <div>
          You scored {score} out of {questions.length}
          </div>
          <div className="reset">
            <button onClick={resetHandler}>Reset Quiz</button>
            </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentAnswer+1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentAnswer].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentAnswer].answerOptions.map((answerOption) => (
              <button onClick={()=>clickHandler(answerOption.isCorrect)}> {answerOption.answerText} </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
