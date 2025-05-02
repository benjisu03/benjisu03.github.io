"use client";

import ProjectCard, {CardCorner} from "@/components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import {useState} from "react";
import Separator from "@/components/Separator";
import ProjectPage from "@/components/ProjectPage";

export type Project = {
	id: string;
	name: string;
	description: string;
	image: string;
	corner: CardCorner;
}


// TODO: auto set card corners
const projects: Project[] = [
	{
		id: "grayshift",
		name: "Grayshift",
		description: "3D raytracer with GPU acceleration",
		image: "/images/grayshift.png",
		corner: CardCorner.TopLeft
	},
	{
		id: "valley-west",
		name: "Valley West - Renovation",
		description: "A digital reimagining for a dying mall",
		image: "/images/vwm-edit.png",
		corner: CardCorner.TopRight
	},
	{
		id: "non-euclidean",
		name: "Non-Euclidean Rendering Engine",
		description: "Game engine designed to render hyperbolic worlds",
		image: "/images/non-euclid2.png",
		corner: CardCorner.BottomLeft
	},
	{
		id: "usb-c",
		name: "USB-C Power Supply",
		description: "Simple PCB for negotiating power over USB-C PD",
		image: "/images/PCB-render.png",
		corner: CardCorner.BottomRight
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