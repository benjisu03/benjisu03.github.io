import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";

export type IconProps = {
	image: string;
	label: string;
	link: string;
}

const Icon = ({image, label, link}: IconProps) => {
	const [showOverlay, setShowOverlay] = useState<boolean>(false);

	return (
		<motion.div
			className = {"relative overflow-hidden h-[100px] min-w-[100px] rounded-xl flex flex-col items-center pb-[10px]"}
			onHoverStart = {() => setShowOverlay(true)}
			onHoverEnd   = {() => setShowOverlay(false)}
		>
			<AnimatePresence>
				{showOverlay && (
					<motion.div
						className = {"absolute inset-0 z-10 flex justify-center items-center"}
						initial = {{opacity: 0}}
						animate = {{opacity: 1}}
						exit    = {{opacity: 0}}
					>
						<div className = {"absolute bg-black pointer-events-none opacity-50 h-full w-full"}/>
						<motion.a
							className = {"bg-foreground font-semibold text-xs z-10 px-4 py-1 rounded-full flex items-center ga-[0.5ch] hover:opacity-75"}
							initial = {{y: 10}}
							animate = {{y:  0}}
							exit    = {{y: 10}}
							href = {link}
							target = "_blank"
							rel = "noopener noreferrer"
						>
							<span>Visit</span>
						</motion.a>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="flex-grow flex justify-center items-center w-full">
			<Image
				src = {image}
				alt = {image}
				width = {64}
				height = {64}
				style = {{objectFit: "contain"}}
			/>
			</div>
			<h1 className = "text-xs font-semibold">{label}</h1>
		</motion.div>
	);
}

export default Icon;

export const BevyIcon: IconProps = {
	image: "/icons/bevy.svg",
	label : "Bevy",
	link : "https://bevyengine.org/"
}
export const BlenderIcon: IconProps = {
	image: "/icons/blender.png",
	label: "Blender",
	link : "https://blender.org/"
}
export const RustIcon: IconProps = {
	image: "/icons/rust.png",
	label: "Rust",
	link : "https://www.rust-lang.org/"
}