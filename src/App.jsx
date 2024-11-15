import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";
import "boxicons/css/boxicons.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router basename="portfolio-v2">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/email-submission-success" element={<Thanks />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  )
}

export default App;