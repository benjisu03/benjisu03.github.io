"use client";

import ProjectCard, {CardCorner} from "@/components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import {ReactNode, useState} from "react";
import ProjectPage from "@/components/ProjectPage";
import {IconCarouselProps} from "@/components/IconCarousel";
import {Grayshift} from "@/components/projects/Grayshift";
import {ValleyWest} from "@/components/projects/ValleyWest";
import {NonEuclidean} from "@/components/projects/NonEuclidean";
import {USBC} from "@/components/projects/USBC";

export type Project = {
	id: string;
	name: string;
	description: string;
	image: string;
	repo: string | null;
	website: string | null;
	corner: CardCorner;
	content: ReactNode;
	toolCarouselProps: IconCarouselProps;
}

const projects: Project[] = [Grayshift, ValleyWest, NonEuclidean, USBC];

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
								// TODO: auto set card corners
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