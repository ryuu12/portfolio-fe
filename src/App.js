import Header from "./components/Header";
import Project from "./pages/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Project />}></Route>
        <Route exact path="/project" element={<Project />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
