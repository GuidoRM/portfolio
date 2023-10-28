import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SvgMenu from "../assets/icons/SvgMenu";
import SvgArrowUp from "../assets/icons/SvgArrowUp";

const Menu = () => {
    const [activeDropdown, setActiveDropdown] = useState(false);

    return (
        <>
            <section className="menu-container">
                
                <span onClick={()=>{setActiveDropdown(!activeDropdown)}}>
                    <SvgMenu />
                </span>

                <nav className="menu-nav" style={activeDropdown?{display:"flex"}:null}>
                    <NavLink className="menu-nav-link" to={"/"}>Home</NavLink>
                    <NavLink className="menu-nav-link" to={"/about"}>About me</NavLink>
                    <NavLink className="menu-nav-link" to={"/projects"}>Projects</NavLink>
                    <NavLink className="menu-nav-link" to={"/contact"}>Contact</NavLink>

                    <section className="menu-social">
                        <Link target="_blank" rel="noopener" to="https://www.linkedin.com/in/guidomamani">LinkedIn <SvgArrowUp /> </Link>
                        <Link to={""}>Resume <SvgArrowUp /> </Link>
                    </section>
                </nav>
            </section>
        </>
    )
}

export default Menu