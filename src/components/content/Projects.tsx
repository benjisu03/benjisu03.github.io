import ProjectCard, {CardCorner} from "@/components/ProjectCard";

type ProjectsProps = {
	className?: string
}

const Projects = ({ className = "" }: ProjectsProps) => {
	return (
		<div className = { `${className} grid grid-cols-2` }>
			<ProjectCard corner = {CardCorner.TopLeft} name = "Grayshift" className = {"bg-[url('/images/grayshift.png')] bg-cover bg-center h-64"} />
			<ProjectCard corner = {CardCorner.TopRight} name = "Valley West - Renovation" className = {"bg-[url('/images/vwm-edit.png')] bg-cover bg-center h-64"} />
			<ProjectCard corner = {CardCorner.BottomLeft} name = "Non-Euclidean Rendering Engine" className = {"bg-[url('/images/non-euclid-edit.png')] bg-cover bg-center h-64"} />
			<ProjectCard corner = {CardCorner.BottomRight} name = "USB-C Power Supply" className = {"bg-[url('/images/PCB-render.png')] bg-cover bg-center h-64"} />
		</div>
	);
}

export default Projects;