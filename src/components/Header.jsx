import { Link, NavLink } from "react-router-dom"
import SvgArrowUp from "../assets/icons/SvgArrowUp"
import SvgLogo from "../assets/icons/SvgLogo"

const Header = () => {
  return (
    <header className="header-container">

      <Link to={"/"} className="header-container-logo">
        <SvgLogo />

        <section className="header-subcontainer">
          <h2 className="header-container-title" to={""}>Guido Mamani</h2>
          <h2 className="header-container-subtitle" to={""}>Software Developer</h2>
        </section>
      </Link>

      <nav className="header-container-nav">
        <NavLink className="header-container-nav-link" to={"/"}>Home</NavLink>
        <NavLink className="header-container-nav-link" to={"/about"}>About me</NavLink>
        <NavLink className="header-container-nav-link" to={"/projects"}>Projects</NavLink>
        <NavLink className="header-container-nav-link" to={"/contact"}>Contact</NavLink>
      </nav>

      <nav className="header-container-links">
        <Link target="_blank" rel="noopener" to="https://www.linkedin.com/in/guidomamani">LinkedIn <SvgArrowUp /> </Link>
        <Link to={""}>Resume <SvgArrowUp /> </Link>
      </nav>

    </header>
  )
}

export default Header