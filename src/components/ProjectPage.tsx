import {Project} from "@/components/content/Projects";
import IconCarousel from "@/components/IconCarousel";
import Separator from "@/components/Separator";
import {GithubLink, GlobeLink} from "@/components/SocialIcons";


type ProjectPageProps = {
	project: Project;
	className?: string;
}

const ProjectPage = ({project, className = ""}: ProjectPageProps) => {
	return (
		<div className = {"overflow-hidden"}>
			<div className = "flex items-center gap-4">
				<h1 className="text-4xl font-bold mb-2">{project.name}</h1>
					<ul className = "flex gap-2">
						{!!project.repo && (
							<li><GithubLink link = {project.repo} size = {24} className = "mb-[10px]" /></li>
						)}
						{!!project.website && (
							<li><GlobeLink link = {project.website} size = {24} className = "mb-[10px]" /></li>
						)}
					</ul>
			</div>
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