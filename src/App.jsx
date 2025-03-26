import { Routes , Route } from "react-router-dom"
import Navbar from "./components/nav"
import Home from "./components/child-components/home"
import About from "./components/child-components/about"
import Project from "./components/child-components/project"
import Contact from "./components/child-components/contact"
import Footer from "./components/footer"
import Architect from "./components/child-components/architect"
import Blog from "./components/child-components/blog"
function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/architect" element={<Architect/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
