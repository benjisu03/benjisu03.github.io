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

	const baseStyle    = "px-3 py-3 w-full hover:bg-gray-200 font-semibold";
	const firstStyle   = "rounded-bl-2xl";
	const lastStyle    = "rounded-tr-2xl";
	const activeStyle  = "text-accent";

	return (
		<Tile className={"relative flex-grow min-w-[600px] max-w-[1000px] w-full"}>
			<div className={
				"absolute " +
				"top-0 bottom-auto left-auto right-0 " +
				"px-0 " +
				"border-l border-b border-border rounded-tr-2xl rounded-bl-2xl"
			}>
				<nav className={"flex justify-around"}>
					{pages.map((page, index) => {
						const isFirst = index === 0;
						const isLast = index === pages.length - 1;
						const isActive = index === activeTab;

						return (<button
							key={page.name}
							onClick={() => setActiveTab(index)}
							className={`${baseStyle} ${isFirst ? firstStyle : ""} ${isLast ? lastStyle : ""} ${isActive ? activeStyle : ""}`}
						>
							{page.name}
						</button>);
					})}
				</nav>
			</div>
			<h2 className = {
				"font-semibold text-3xl " +
				"relative mb-[20px] " +
				"after:absolute after:left-0 after:bottom-[-10px] " +
				"after:h-[6px] after:w-full " +
				"after:bg-accent after:rounded-md"
			}> { pages[activeTab].name } </h2>
			<main> { pages[activeTab].content } </main>
		</Tile>
	);
}

export default TabbedPanel;
