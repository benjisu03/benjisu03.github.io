import NavBar from '../components/NavBar';
import TitleBar from "@/components/TitleBar";

export default function Home() {
  return (
      <div>
          <TitleBar />
          <NavBar />
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <b>Benjamin Johnson</b>
                <ul>
                    <li><a href={"https://www.linkedin.com/in/benjamin-johnson-ia/"}> LinkedIn</a></li>
                    <li><a href={"https://github.com/benjisu03"}> GitHub</a></li>
                    <li>Email: benj2003@iastate.edu</li>
                </ul>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              {/* existing content */}
            </footer>
          </div>
      </div>
  );
}