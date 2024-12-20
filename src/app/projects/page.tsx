import NavBar from '../../components/NavBar';
import TitleBar from "@/components/TitleBar";

export default function Home() {
    return (
        <div className="grid grid-rows-[auto_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <TitleBar />
                <NavBar />
                <div>
                    <h1>Grayshift Raytracer</h1>
                    <p>This project involved building a raytracer in Rust, initially based on the Ray Tracing in One Weekend book series.
                        Over time, I enhanced the project with features such as GPU acceleration, BSDF materials, and mesh loading.
                        Through this project, I improved my Rust programming skills and gained valuable experience in utilizing multithreading to boost computational efficiency.
                        The source code is available on <a href={"https://github.com/benjisu03/grayshift"}>Github.</a>
                    </p>

                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                {/* existing content */}
            </footer>
        </div>
    );
}