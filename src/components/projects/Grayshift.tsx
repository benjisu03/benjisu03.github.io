import {Project} from "@/components/content/Projects";
import {CardCorner} from "@/components/ProjectCard";
import {RTIOWIcon, RustIcon, TokioIcon, WGPUIcon} from "@/components/Icon";

const GrayshiftContent = ({}) => {
	return (
		<p>
			<b>Grayshift</b> is a raytracer built in Rust that I originally started as a school project for a
			computer graphics course. The implementation was created from the "Raytracing in One Weekend" series.
			This set of three online books provides the structure of a basic raytracer. Most of my work on the
			project has been to optimize the performance with parallelism and GPU acceleration. I am also working
			on a shader system that allows users to construct materials using graphical nodes.
		</p>
	);
}

export const Grayshift: Project = {
	id: "grayshift",
	name: "Grayshift",
	description: "3D raytracer with GPU acceleration",
	image: "/images/grayshift.png",
	corner: CardCorner.TopLeft,
	repo: "https://github.com/benjisu03/grayshift",
	website: null,
	toolCarouselProps: {
		icons: [
			RustIcon,
			WGPUIcon,
			RTIOWIcon,
			TokioIcon,
			RustIcon,
			WGPUIcon,
			RTIOWIcon,
			TokioIcon
		],
		gap: 50,
		speed: 0.75,
		hoverSpeed: 0.25
	},
	content: <GrayshiftContent />
}