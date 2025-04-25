import ProjectCard, {CardCorner} from "@/components/ProjectCard";

type Project = {
	id: string;
	name: string;
	description: string;
	image: string;
	corner: CardCorner;
}


// TODO: auto set card corners
const projects: Project[] = [
	{
		id: "grayshift",
		name: "Grayshift",
		description: "3D raytracer with GPU acceleration",
		image: "/images/grayshift.png",
		corner: CardCorner.TopLeft
	},
	{
		id: "valley-west",
		name: "Valley West - Renovation",
		description: "A digital reimagining for a dying mall",
		image: "/images/vwm-edit.png",
		corner: CardCorner.TopRight
	},
	{
		id: "non-euclidean",
		name: "Non-Euclidean Rendering Engine",
		description: "Game engine designed to render hyperbolic worlds",
		image: "/images/non-euclid-edit.png",
		corner: CardCorner.BottomLeft
	},
	{
		id: "usb-c",
		name: "USB-C Power Supply",
		description: "Simple PCB for negotiating power over USB-C PD",
		image: "/images/PCB-render.png",
		corner: CardCorner.BottomRight
	},
];

const grayshiftBlurb = "";
const valleyWestBlurb = "";
const nonEuclidBlurb = "";
const usbCBlurb = "";


type ProjectsProps = {
	className?: string
}

{/*<ProjectCard corner = {CardCorner.TopLeft} name = "Grayshift" blurb = {grayshiftBlurb} className = {"bg-[url('/images/grayshift.png')] bg-cover bg-center h-64"} />*/}
{/*<ProjectCard corner = {CardCorner.TopRight} name = "Valley West - Renovation" blurb = {valleyWestBlurb} className = {"bg-[url('/images/vwm-edit.png')] bg-cover bg-center h-64"} />*/}
{/*<ProjectCard corner = {CardCorner.BottomLeft} name = "Non-Euclidean Rendering Engine" blurb = {nonEuclidBlurb} className = {"bg-[url('/images/non-euclid-edit.png')] bg-cover bg-center h-64"} />*/}
{/*<ProjectCard corner = {CardCorner.BottomRight} name = "USB-C Power Supply" blurb = {usbCBlurb} className = {"bg-[url('/images/PCB-render.png')] bg-cover bg-center h-64"} />*/}

const Projects = ({ className = "" }: ProjectsProps) => {

	return (
		<div className = {`${className} grid grid-cols-2`}>
			{projects.map((project: Project) => {
				return (
					<ProjectCard
						key = {project.id}
						name=  {project.name}
						description = {project.description}
						image = {project.image}
						corner = {project.corner}
						className = {`bg-cover bg-center h-64`}
					/>
				);
			})}
		</div>
	);
}

export default Projects;