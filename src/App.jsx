import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills/Skills";
import Cover from "./components/pages/Cover";

const App = () => {
  return (
    <div>
      <div className="flex bg-my-bg2">
        <Sidebar />
        <main className="flex-1 pl-0 lg:pl-[300px]">
          <Cover />
        </main>
        {/* <About /> */}
      </div>
      <div className="lg:pl-[300px]">
        <Projects />
      </div>
      <div className="lg:pl-[300px]">
        <Skills />
      </div>
    </div>
  );
};

export default App;
