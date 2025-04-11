import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./style.css";
import "./mediaqueries.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function Home() {
  return (
    <>
      <Profile />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
