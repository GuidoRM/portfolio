import Title from '../components/Title'
import ProjectLayout from '../components/ProjectLayout'


const projects = [
  {
    title: "FABLE STORE - CLOTHING ECOMMERCE",
    description: "Ecommerce design developed by the community and as a challenge I set out to develop the Frontend part of it.",
    img: "projects-1.png",
    stackImages: ["html", "css", "js", "ex"],
    stackNames: "HTML, CSS, JS and Express",
    buttons: [
      {
        name: "Code",
        link: "https://github.com/GuidoRM/ECOMMERCE-FABLE",
        button: "button_git.png",
        active: true
      },
      {
        name: "Design",
        link: "",
        button: "button_figma.png",
        active: false
      },
      {
        name: "Deploy",
        link: "",
        button: "button_deploy.png",
        active: false
      },
    ]
  },
  {
    title: "PERSONAL PORTFOLIO",
    description: "Ultra personalized personal portfolio for a software developer to display all developed projects and display relevant contact information and personal information.",
    img: "projects-2.png",
    stackImages: ["html", "css", "js", "react", "sass"],
    stackNames: "HTML, CSS, JS, React, and Sass",
    buttons: [
      {
        name: "Code",
        link: "https://github.com/GuidoRM/portfolio",
        button: "button_git.png",
        active: true
      },
      {
        name: "Design",
        link: "",
        button: "button_figma.png",
        active: false
      },
      {
        name: "Deploy",
        link: "",
        button: "button_deploy.png",
        active: false
      },
    ]
  }
]

const Projects = () => {
  return (
    <section className='projects-container'>
      <Title text={"PROJECTS"}/>

      {
        projects.map( ({title, description, img, stackImages, stackNames, buttons} )=>(
          <ProjectLayout key={title} img={img} title={title} buttons={buttons} description={description} stackImages={stackImages} stackNames={stackNames}/>
        ))
      }


    </section>
  )
}

export default Projects