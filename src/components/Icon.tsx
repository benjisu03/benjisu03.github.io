import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";

export type IconProps = {
	image: string;
	label: string;
	link: string;
	imageSize?: number;
	textClassName?: string;
}

const Icon = ({image, label, link, imageSize = 64, textClassName = ""}: IconProps) => {
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
				width = {imageSize}
				height = {imageSize}
				style = {{objectFit: "contain"}}
			/>
			</div>
			<h1 className = {`text-xs text-center font-semibold ${textClassName}`}>{label}</h1>
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

export const OpenGLIcon: IconProps = {
	image: "/icons/opengl.png",
	label: "OpenGL",
	link : "https://www.opengl.org/"
}

export const CMakeIcon: IconProps = {
	image: "/icons/cmake.png",
	label: "CMake",
	link : "https://cmake.org/"
}

export const CPPIcon: IconProps = {
	image: "/icons/cpp.png",
	label: "C++",
	link : "https://en.wikipedia.org/wiki/C%2B%2B"
}

export const GLFWIcon: IconProps = {
	image: "/icons/glfw.png",
	label: "GLFW",
	link : "https://www.glfw.org/"
}

export const GLMIcon: IconProps = {
	image: "/icons/glm.png",
	label: "GLM",
	link : "https://github.com/g-truc/glm"
}

export const Catch2Icon: IconProps = {
	image: "/icons/catch2.png",
	label: "Catch2",
	link : "https://github.com/catchorg/Catch2"
}

export const ImGuiIcon: IconProps = {
	image: "/icons/imgui.png",
	label: "Dear ImGui",
	link : "https://github.com/ocornut/imgui"
}

export const WGPUIcon: IconProps = {
	image: "/icons/wgpu.png",
	label: "WGPU",
	link : "https://wgpu.rs/"
}

export const TokioIcon: IconProps = {
	image: "/icons/tokio.png",
	label: "Tokio",
	link : "https://tokio.rs/"
}

export const RTIOWIcon: IconProps = {
	image: "/icons/rtiow.png",
	label: "Raytracing in One Weekend",
	link : "https://raytracing.github.io/",
	imageSize: 48,
	textClassName: "text-[10px]"
}

export const KiCadIcon: IconProps = {
	image: "/icons/kicad.png",
	label: "KiCad",
	link : "https://www.kicad.org//",
	imageSize: 76
}