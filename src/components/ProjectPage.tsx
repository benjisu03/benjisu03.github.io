import {Project} from "@/components/content/Projects";
import IconCarousel from "@/components/IconCarousel";
import Separator from "@/components/Separator";


type ProjectPageProps = {
	project: Project;
	className?: string;
}

const ProjectPage = ({project, className = ""}: ProjectPageProps) => {
	return (
		<div className = {"overflow-hidden"}>
			<h1 className="text-4xl font-bold mb-2">{project.name}</h1>
			<p className = {
				"text-lg " +
				"relative mb-[20px] " +
				"after:absolute after:left-0 after:bottom-[-10px] " +
				"after:h-[6px] after:w-full " +
				"after:bg-accent after:rounded-md"
			}>
				{project.description}
			</p>
			<h2 className = "text-lg font-semibold">Tools</h2>
			<Separator />
			<IconCarousel {...project.toolCarouselProps} />
			<Separator />
		</div>
	);
}

export default ProjectPage;