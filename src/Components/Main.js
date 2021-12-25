import React from "react";
import ButtonUI from "./ButtonUI";
import { motion } from "framer-motion";
import data from "./data";
import { useToggle } from "../Providers/Context";
import Question from "./Question";

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

const Main = () => {
  const { waiting, loading } = useToggle();
  if (waiting) {
    return (
      <motion.div
        className={`flex items-center justify-center gap-5 flex-wrap whitespace-nowrap`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data.map((item, i) => {
          return (
            <motion.div variants={el} key={i}>
              <ButtonUI
                category={item.category}
                image={item.img}
                url={item.url}
              />
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  if (loading) {
    return <h2 className="hidden">loading</h2>;
  }

  return <Question />;
};

export default Main;
