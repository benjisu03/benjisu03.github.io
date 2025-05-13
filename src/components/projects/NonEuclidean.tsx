import {CardCorner} from "@/components/ProjectCard";
import {Catch2Icon, CMakeIcon, CPPIcon, GLFWIcon, GLMIcon, ImGuiIcon, OpenGLIcon} from "@/components/Icon";

const NonEuclideanContent = ({}) => {
	return (
		<p>Description</p>
	);
}

export const NonEuclidean = {
	id: "non-euclidean",
	name: "Non-Euclidean Rendering Engine",
	description: "Game engine designed to render hyperbolic worlds",
	image: "/images/non-euclid2.png",
	corner: CardCorner.BottomLeft,
	repo: "https://github.com/sdmay25-37/NonEuclideanEngine",
	website: "https://sdmay25-37.sd.ece.iastate.edu/",
	toolCarouselProps: {
		icons: [
			CPPIcon,
			OpenGLIcon,
			CMakeIcon,
			GLFWIcon,
			GLMIcon,
			Catch2Icon,
			ImGuiIcon
		],
		gap: 50,
		speed: 0.75,
		hoverSpeed: 0.25
	},
	content: <NonEuclideanContent />
}