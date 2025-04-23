type ProjectsProps = {
	className?: string
}

const Projects = ({ className = "" }: ProjectsProps) => {
	return <div className={`${className}`}><h1>Projects</h1></div>
}

export default Projects;