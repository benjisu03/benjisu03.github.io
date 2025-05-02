import {Project} from "@/components/content/Projects";


type ProjectPageProps = {
	project: Project;
	className?: string;
}

const ProjectPage = ({project, className = ""}: ProjectPageProps) => {
	return (
		<div>
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
		</div>
	);
}

export default ProjectPage;