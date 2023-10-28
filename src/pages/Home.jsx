import { Link } from "react-router-dom"
import Yo from "./../assets/yo.png"
import SvgLinkedin from "../assets/icons/SvgLinkedin"
import SvgGithub from "../assets/icons/SvgGithub"

const Home = () => {
  return (
    <>
      <section className='home-container'>

        <span>
          <img className="home-image" src={Yo} alt="Imagen del Desarrollador de Software" />

        </span>

        <section className="home-container-description">

          <h2 className="home-title">Guido Mamani</h2>

          <h2 className="home-subtitle">Software Developer.</h2>

          <p className="home-description">
            I am a passionate fullstack developer with experience building complete web applications. My approach is to build technology solutions from the ground up, spanning both frontend and backend, to deliver exceptional user experiences.
          </p>

          <section className="home-container-buttons">
            <Link className="home-button-contact" to={"/contact"}>
              CONTACT ME
            </Link>

            <Link className="home-button" target="_blank" rel="noopener" to={"https://www.linkedin.com/in/guidomamani"}>
              <SvgLinkedin />
            </Link>

            <Link className="home-button" target="_blank" rel="noopener" to={"https://github.com/GuidoRM"}>
              <SvgGithub />
            </Link>
          </section>

        </section>

      </section>
    </>
  )
}

export default Home