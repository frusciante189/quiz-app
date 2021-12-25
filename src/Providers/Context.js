import axios from "axios";
import React, { useState, useContext, createContext } from "react";

const newContext = createContext({});

const Context = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [index, setIndex] = useState(0);
  const [endGame, setEndGame] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
      } else {
        setWaiting(true);
      }
    } else {
      setWaiting(true);
    }
    console.log(url);
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    console.log(value);
  };

  const gameOver = () => {
    setEndGame(!endGame);
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        gameOver();
        return 0;
      } else {
        return index;
      }
    });
  };

  const restart = () => {
    setLoading(false);
    setWaiting(true);
    setCorrect(0);
    setIndex(0);
    setEndGame(false);
    setQuestions([]);
  };

  return (
    <newContext.Provider
      value={{
        questions,
        setQuestions,
        setLoading,
        loading,
        waiting,
        setWaiting,
        fetchQuestions,
        checkAnswer,
        index,
        setIndex,
        nextQuestion,
        endGame,
        setEndGame,
        correct,
        restart,
      }}
    >
      {children}
    </newContext.Provider>
  );
};

export function useToggle() {
  return useContext(newContext);
}

export default Context;
