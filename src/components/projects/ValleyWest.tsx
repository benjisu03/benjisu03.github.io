import {Project} from "@/components/content/Projects";
import {CardCorner} from "@/components/ProjectCard";
import {BevyIcon, BlenderIcon, RustIcon} from "@/components/Icon";

const ValleyWestContent = ({}) => {
	return (
		<div>
			<p>
				<b>Valley West - Renovation</b> is project started by me and my friend with the goal of digitally recreating
				the Valley West Mall located in West Des Moines, Iowa. Many of the long-time stores have left leaving the
				shopping mall a shell of its former self. We are working on 3D modeling the interior and recreating the environment.
				The main program is written in Rust using the Bevy game engine. There is a first-person camera that allows users to
				navigate the world, and in the future we are looking towards more interactive objects. Although this project is tailored
				specifically for this mall, many of the tools we are working on can be used by others in the future to recreate their own
				digital worlds. The most significant of these tools is a Blender plugin that makes it easy to arrange a collage of model
				images into a 3D world.
			</p>
		</div>
	);
}

export const ValleyWest: Project = {
	id: "valley-west",
	name: "Valley West - Renovation",
	description: "A digital reimagining for a dying mall",
	image: "/images/vwm-edit.png",
	corner: CardCorner.TopRight,
	repo: null,
	website: null,
	toolCarouselProps: {
		icons: [
			BevyIcon,
			BlenderIcon,
			RustIcon,
			BevyIcon,
			BlenderIcon,
			RustIcon
		],
		gap: 50,
		speed: 0.75,
		hoverSpeed: 0.25
	},
	content: <ValleyWestContent />
}