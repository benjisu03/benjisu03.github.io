import Tile from "@/components/Tile";
import Sidebar from "@/components/Sidebar";
import TabbedPanel, {ContentPage} from "@/components/TabbedPanel";
import Resume from "@/components/content/Resume";
import Projects from "@/components/content/Projects";
import About from "@/components/content/About";
import Reflections from "@/components/content/Reflections";

const pages: ContentPage[] = [
	{ name: 'About',        content: <About className = { "bg-red-500" } />       },
	{ name: 'Projects',     content: <Projects className = { "bg-red-500" } />    },
	{ name: 'Resume',       content: <Resume className = { "bg-red-500" } />      },
	{ name: 'Reflections',  content: <Reflections className = { "bg-red-500" } /> }
];

export default function Home() {
	return (
		<div className = { "flex flex-row gap-[25px]" }>
			<Sidebar />
			<TabbedPanel pages = { pages } />
		</div>

	);
}