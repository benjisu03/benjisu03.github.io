import ProjectCard, {CardCorner} from "@/components/ProjectCard";

type ProjectsProps = {
	className?: string
}

const Projects = ({ className = "" }: ProjectsProps) => {
	return (
		<div className = { `${className} grid grid-cols-2` }>
			<ProjectCard corner = {CardCorner.TopLeft} />
			<ProjectCard corner = {CardCorner.TopRight} />
			<ProjectCard corner = {CardCorner.BottomLeft} />
			<ProjectCard corner = {CardCorner.BottomRight} />
		</div>
	);
}

export default Projects;