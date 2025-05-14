import {Project} from "@/components/content/Projects";
import {CardCorner} from "@/components/ProjectCard";
import {KiCadIcon} from "@/components/Icon";

const USBCContent = ({}) => {
	return (
		<div>
			<p>
				In my electronics design course, I developed a USB-C power supply with adjustable voltage and current.
				The board uses a specialized IC to enable the USB-C Power Delivery protocol, allowing up to 100W of power.
				This was the first PCB I have ever designed, and I purposely chose an ambitious project so I could practice
				my design skills. The schematic design and layout are done in KiCad. Much of the my time spent working on
				this project consisted of part selection to keep component costs low and to reduce the Bill of Materials.
				When it came to PCB layout, I wanted a design that was aesthetic pleasing while still adhering to common
				layout practices. Thankfully, there aren't any data sensitive lines, so the requirements we're mostly
				lenient. The board is hand-soldered, and because of the QFN package I also had to learn how to use a hot
				air rework station. I currently use the board for powering my other electronics designs during testing.
			</p>
		</div>
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