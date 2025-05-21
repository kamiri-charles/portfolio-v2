import { useEffect } from "react";
import { HashRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Thanks from "./components/Thanks";
import axios from "axios";
import "boxicons/css/boxicons.min.css";
import "./bx-extra-brand-icons/fonts/brands/boxicons-brands.css";
import "./App.scss";

function App() {
   useEffect(() => {
			const trackVisitor = async () => {
				try {
					await axios.post(
						"https://portfolio-visitors-logger.onrender.com/track-visitor"
					);
				} catch (error) {
					console.error("Error tracking visitor:", error);
				}
			};

			trackVisitor();
		}, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/certifications" element={<Certifications />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/email-submission-success" element={<Thanks />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  )
}

export default App;