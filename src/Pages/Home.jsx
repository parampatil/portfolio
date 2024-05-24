
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {

  return (
    <header className="bg-black dark:bg-gray-800 transition-shadow shadow-lg">
      <div className="text-white dark:text-gray-200">Param</div>
      <ThemeToggle />
    </header>
  );
};

export default Home;
