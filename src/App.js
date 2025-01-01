import "./styles/main.css"

import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Contacts from "./components/pages/Contacts"

export default function App() {

  return(
    <div className="App">
      <Nav /> 
      {/* <Home /> */}
      <Projects />
      {/* <Contacts /> */}
      <Footer />
    </div>
  )
}