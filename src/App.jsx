import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import DefaultLayout from "./components/DefaultLayout"
import Projects from "./pages/Projects"

function App() {

  return (
    <>
      <Routes>
        
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
