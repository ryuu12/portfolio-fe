//
// Main App File
// The main app file for the components and pages.
//

import Header from "./components/Header";
import Project from "./pages/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer";
import About from "./pages/About";
import { inject } from '@vercel/analytics';

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

inject();

export default App;
