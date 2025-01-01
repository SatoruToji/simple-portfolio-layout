import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Contacts from "./components/pages/Contacts"
import Project from "./components/pages/Project"
import ScrollToTop from "./utils/scrollToTop"

export default function App() {

  return(
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        <Footer />        
      </Router>

    </div>
  )
}