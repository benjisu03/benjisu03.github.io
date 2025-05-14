import {CardCorner} from "@/components/ProjectCard";
import {Catch2Icon, CMakeIcon, CPPIcon, GLFWIcon, GLMIcon, ImGuiIcon, OpenGLIcon} from "@/components/Icon";

const NonEuclideanContent = ({}) => {
	return (
		<p>
			My senior design project for my Computer Engineering program, was to create a
			non-Euclidean rendering engine. This engine is designed to be used by game developers
			who want to integrate hyperbolic worlds into their games. In hyperbolic geometry,
			the world grows exponentially as you move away from the origin. This can be used by
			developers for specific designs, and possibly where the "non-intuitiveness" is intentional.
			My role on the project was to set up our graphics pipeline in OpenGL as well as to
			architect the structure of the engine. The main challenge was keeping the engine as
			modular as possible to allow flexibility for many different game use cases. <br />
			This project helped me develop my C++ abilities and taught me how to better work on
			software applications that are developed by multiple people.
		</p>
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