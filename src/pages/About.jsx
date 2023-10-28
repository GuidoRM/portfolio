import Title from "../components/Title";

const About = () => {

  const frontend = ["html", "css", "js", "ts", "react", "redux", "sass", "tailwind"];
  const backend = ["sequelize", "mysql", "express"];
  const more = ["git", "vite", "webpack", "npm"];

  return (
    <>
      <section className="about-container">

        <section className="about-container-description">
          <Title text={"ABOUT ME"} />

          <section className="about-subcontainer">

            <section className="about-description">
              <h3>Personal Information</h3>
              <ul>
                <li><span>Name: </span>Guido Rafael Mamaní</li>
                <li><span>Age: </span>19 years old</li>
                <li><span>Email: </span>guidorafaelmamani100@gmail.com</li>
                <li><span>Phone: </span>+54 2964-476955 </li>
                <li><span>Languages: </span>English and Spanish</li>

              </ul>
            </section>

            <img src="qr.png" alt="" />

          </section>


        </section>

        <section className="about-container-stack">
          <Title text={"MY STACK"} />

          <section className="about-stack">
            <h3>Frontend: </h3>

            <section className="about-stack-languages">
              {
                frontend.map((src, index) => {
                  return (
                    <img key={src + index} src={`/stack/${src}.svg`} alt="" />
                  )
                })
              }
            </section>

          </section>

          <section className="about-stack">
            <h3>Backend: </h3>

            <section className="about-stack-languages">
              {
                backend.map((src, index) => {
                  return (
                    <img key={src + index} src={`/stack/${src}.svg`} alt="" />
                  )
                })
              }
            </section>

          </section>

          <section className="about-stack">
            <h3>More: </h3>

            <section className="about-stack-languages">
              {
                more.map((src, index) => {
                  return (
                    <img key={src + index} src={`/stack/${src}.svg`} alt="" />
                  )
                })
              }
            </section>

          </section>


        </section>



      </section>
    </>
  )
}

export default About