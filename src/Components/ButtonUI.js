import { useToggle } from "../Providers/Context";

const ButtonUI = ({ category, image, url }) => {
  const { fetchQuestions } = useToggle();

  const getQuestions = () => {
    fetchQuestions(url);
  };

  return (
    <div
      className="flex flex-col sm:max-w-[200px] w-full max-w-[100px] flex-shrink-0 items-center justify-center border py-3 rounded-2xl dark:bg-neutral-900 bg-stone-200 dark:border-neutral-600 border-neutral-300 hover:-translate-y-2 transition-all transform duration-300 hover:shadow-lg hover:shadow-emerald-500 group hover:border-emerald-500 cursor-pointer"
      onClick={getQuestions}
    >
      <img src={image} alt="" />
      <span className="mt-3 text-lg group-hover:text-emerald-400 group-hover:font-medium dark:text-neutral-400 text-neutral-700 transition-colors transform duration-300">
        {category}
      </span>
    </div>
  );
};

export default ButtonUI;
