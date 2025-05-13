import {Project} from "@/components/content/Projects";
import {CardCorner} from "@/components/ProjectCard";
import {KiCadIcon} from "@/components/Icon";

const USBCContent = ({}) => {
	return (
		<p>Description</p>
	);
}

export const USBC: Project = {
	id: "usb-c",
	name: "USB-C Power Supply",
	description: "Simple PCB for negotiating power over USB-C PD",
	image: "/images/PCB-render.png",
	corner: CardCorner.BottomRight,
	repo: null,
	website: null,
	toolCarouselProps: {
		icons: [
			KiCadIcon,
			KiCadIcon,
			KiCadIcon,
			KiCadIcon,
			KiCadIcon,
			KiCadIcon
		],
		gap: 100,
		speed: 0.75,
		hoverSpeed: 0.25
	},
	content: <USBCContent />
}