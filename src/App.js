import Main from "./Components/Main";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-neutral-900 bg-stone-100 relative">
      <DarkMode />
      <div className="sm:max-w-6xl max-w-sm w-full mx-auto">
        <h1 className="text-4xl text-center mb-10  text-transparent bg-clip-text bg-gradient-to-tr from-sky-300 to-emerald-300 font-bold">
          Quizify
        </h1>
        <Main />
      </div>
    </div>
  );
}

export default App;
