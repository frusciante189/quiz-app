import React from "react";
import { useToggle } from "../Providers/Context";
import { motion } from "framer-motion";
import EndGame from "./EndGame";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const el = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Question = () => {
  const { questions, checkAnswer, index, nextQuestion, endGame } = useToggle();

  const { question, incorrect_answers, correct_answer } = questions[index];

  let answers = incorrect_answers.concat(correct_answer);

  if (endGame) {
    return <EndGame />;
  }
  return (
    <motion.div
      className="flex flex-col items-center justify-center sm:px-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-gradient-to-tr from-sky-300 to-emerald-300 p-[2px] rounded-2xl w-full"
        variants={el}
      >
        <div className="dark:text-white text-slate-800 rounded-2xl p-10 flex flex-col space-y-2 z-50 dark:bg-neutral-900 bg-stone-100">
          <h2
            dangerouslySetInnerHTML={{ __html: question }}
            className="pb-3 border-b-2 w-full text-center dark:border-neutral-600 border-stone-400 text-xl font-semibold"
          />
          <div className="flex flex-col space-y-4 items-start pt-3">
            {answers.map((answer, index) => {
              return (
                <div
                  className="flex items-center justify-center md:w-1/2 w-full"
                  key={index}
                >
                  <button
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                    className="w-full py-1.5 pl-5 text-left focus:outline-none focus:ring dark:focus:ring-sky-400 focus:ring-emerald-300 dark:focus:bg-neutral-800 focus:bg-slate-200 dark:focus:bg-opacity-80 dark:hover:bg-neutral-800 dark:hover:bg-opacity-80 hover:bg-slate-200 rounded-xl text-lg transition-colors transform duration-300 peer"
                  />
                </div>
              );
            })}
            <div className="mx-auto pt-5">
              <button
                onClick={() => nextQuestion()}
                className="px-10 py-2 border border-gray-500 text-transparent bg-clip-text bg-gradient-to-tr from-emerald-500 to-sky-500 font-bold text-lg transition-colors transform duration-300 rounded-lg capitalize"
              >
                Next question
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Question;
