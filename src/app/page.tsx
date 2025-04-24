import Tile from "@/components/Tile";
import Sidebar from "@/components/Sidebar";
import TabbedPanel, {ContentPage} from "@/components/TabbedPanel";
import Resume from "@/components/content/Resume";
import Projects from "@/components/content/Projects";
import About from "@/components/content/About";
import Reflections from "@/components/content/Reflections";

const pages: ContentPage[] = [
	{ name: 'About',        content: <About />       },
	{ name: 'Projects',     content: <Projects />    },
	{ name: 'Resume',       content: <Resume />      },
	{ name: 'Reflections',  content: <Reflections /> }
];

export default function Home() {
	return (
		<div className = { "flex flex-row w-full gap-[25px] justify-center" }>
			<Sidebar />
			<TabbedPanel pages = { pages } />
		</div>

	);
}