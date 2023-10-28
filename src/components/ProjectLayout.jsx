import { Link } from "react-router-dom"

const ProjectLayout = ({ img, title, description, stackImages, stackNames, buttons }) => {
    return (
        <article className='project-item-container'>
            <img src={`/projects/${img}`} alt="" />

            <section className='project-item-description'>

                <h2>{title}</h2>
                <p>{description}</p>

                <section className='project-item-stack-names'>
                    <h3>Stack: </h3>
                    <p>{stackNames}</p>
                </section>

                <section className='project-item-stack-images'>
                    {
                        stackImages?.map((src, index) => {
                            return (
                                <img key={src + index} src={`/stack/${src}.svg`} alt="" />
                            )
                        })
                    }
                </section>

                <section className="project-item-buttons">
                    {
                        buttons?.map(({ name, link, button, active }) => (
                            active ?
                            <Link target="_blank" to={link} className="project-item-button" key={name}>
                                <img key={name+ "-button"} src={`/${button}`} alt="" />
                                {name}
                            </Link>:null

                        ))
                    }

                </section>

            </section>
        </article>
    )
}

export default ProjectLayout