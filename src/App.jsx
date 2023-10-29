import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DefaultLayout from "./components/DefaultLayout"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <Routes>
        
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
