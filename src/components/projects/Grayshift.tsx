import {Project} from "@/components/content/Projects";
import {CardCorner} from "@/components/ProjectCard";
import {RTIOWIcon, RustIcon, TokioIcon, WGPUIcon} from "@/components/Icon";

const GrayShiftContent = ({}) => {
	return (
		<p>Description</p>
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
	content: <GrayShiftContent />
}