import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills/Skills";
import Cover from "./components/pages/Cover";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex">
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
