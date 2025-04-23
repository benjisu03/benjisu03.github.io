"use client";

import React, {useState} from "react";
import Tile from "@/components/Tile";

export type ContentPage = {
	name: string;
	content: React.ReactNode;
}

type TabbedPanelProps = {
	pages: ContentPage[];
}

const TabbedPanel = ({ pages }: TabbedPanelProps) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Tile className={"relative w-[1000px]"}>
			<div className={
				"absolute " +
				"top-0 bottom-auto left-auto right-0 " +
				"px-[5px] " +
				"border-l border-b border-border rounded-tr-2xl rounded-bl-2xl"
			}>
				<nav className={"flex justify-around"}>
					{pages.map((page, index) => (
						<button
							key = {page.name}
							onClick = { () => setActiveTab(index) }
							className = { "px-3 py-3 w-full hover:text-accent "}
						>
							{page.name}
						</button>
					))}
				</nav>
			</div>
			<h2 className = {
				"font-semibold text-3xl" +
				" relative mb-[20px] " +
				"after:absolute after:left-0 after:bottom-[-10px] " +
				"after:h-[6px] after:w-full " +
				"after:bg-accent after:rounded-md"
			}> { pages[activeTab].name } </h2>
			<main> { pages[activeTab].content } </main>
		</Tile>
	);
}

export default TabbedPanel;
