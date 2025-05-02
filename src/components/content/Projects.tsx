"use client";

import ProjectCard, {CardCorner} from "@/components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import {useState} from "react";
import ProjectPage from "@/components/ProjectPage";
import {
	BevyIcon,
	BlenderIcon,
	Catch2Icon,
	CMakeIcon,
	CPPIcon,
	GLFWIcon,
	GLMIcon, ImGuiIcon,
	OpenGLIcon, RTIOWIcon,
	RustIcon, TokioIcon, WGPUIcon
} from "@/components/Icon";
import {IconCarouselProps} from "@/components/IconCarousel";

export type Project = {
	id: string;
	name: string;
	description: string;
	image: string;
	repo: string | null;
	website: string | null;
	corner: CardCorner;
	toolCarouselProps: IconCarouselProps
}

const carouselProps = {
	gap: 50,
	speed: 0.75,
	hoverSpeed: 0.25
}

// TODO: auto set card corners
const projects: Project[] = [
	{
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
			...carouselProps
		}
	},
	{
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
			...carouselProps
		}
	},
	{
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
			...carouselProps
		}
	},
	{
		id: "usb-c",
		name: "USB-C Power Supply",
		description: "Simple PCB for negotiating power over USB-C PD",
		image: "/images/PCB-render.png",
		corner: CardCorner.BottomRight,
		repo: null,
		website: null,
		toolCarouselProps: {
			icons: [
				BevyIcon,
				BlenderIcon,
				RustIcon
			],
			...carouselProps
		}
	},
];

type ProjectsProps = {
	className?: string
}

const Projects = ({ className = "" }: ProjectsProps) => {
	const [activeProject, setActiveProject] = useState<Project | null>();

	return (
		<>
			<div className = {`${className} grid grid-cols-2`}>
				{projects.map((project: Project) => {
					return (
						<div key = {project.id} className = {"cursor-pointer"} onClick = {() => setActiveProject(project)}>
							<ProjectCard
								key = {project.id}
								name = {project.name}
								description = {project.description}
								image = {project.image}
								corner = {project.corner}
								className = {`bg-cover bg-center h-64`}
							/>
						</div>
					);
				})}
			</div>

			<AnimatePresence>
				{activeProject && (
					<motion.div
						className="fixed inset-0 bg-black/70 z-50 p-8 overflow-auto flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={(e) => {
							if (e.target === e.currentTarget) {
								setActiveProject(null);
							}
						}}
					>
						<div
							className="rounded-2xl shadow-lg bg-cover bg-center w-full max-w-4xl h-[80vh] flex flex-col p-8 bg-foreground relative"
						>
							<button
								className="absolute top-4 right-4 text-white bg-black/60 px-3 py-1 rounded"
								onClick={() => setActiveProject(null) }
							>
								Close
							</button>

							<ProjectPage project = {activeProject} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
				
		</>
	);
}

export default Projects;