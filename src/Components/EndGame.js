import React from "react";
import { useToggle } from "../Providers/Context";

const EndGame = () => {
  const { correct, restart } = useToggle();
  return (
    <div className="border border-gray-500 shadow shadow-sky-400 md:h-64 h-80 sm:w-2/3 md:w-1/2 mx-auto rounded-2xl flex flex-col items-center justify-start pt-10 px-5 text-center">
      <p className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-300 to-emerald-300 font-bold text-2xl">
        Wow! You got {correct} correct answers out of 10!
      </p>
      <p className="my-5 text-lg dark:text-gray-300">Do you wanna try again?</p>
      <button
        className="px-5 py-2 border rounded-lg text-transparent bg-clip-text bg-gradient-to-tr from-sky-300 to-emerald-300 font-bold text-lg transition-colors duration-300 transform border-gray-500"
        onClick={() => restart()}
      >
        Restart
      </button>
    </div>
  );
};

export default EndGame;
