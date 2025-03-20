import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./style.css";
import "./mediaqueries.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
      <>
          <Navbar />
          <Profile />
          <About />
          <Projects />
          <Contact />
      </>
  );
}

export default App;
