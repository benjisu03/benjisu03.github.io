import NavBar from '../components/NavBar';
import TitleBar from "@/components/TitleBar";
import Image from "next/image";

export default function Home() {
  return (
      <div style={{background: "rgba(29, 78, 216, 0.15)"}}>
          <div className="flex gap-4 px-12  mx-auto min-h-screen max-w-screen-xl text-slate-400">
              <div className="sticky top-0 py-24 flex-1 flex flex-col max-h-screen justify-between">
                  <header className="">
                      <h1 className="font-bold tracking-tight text-slate-200 sm:text-5xl">
                          <a href="/">Benjamin Johnson</a>
                      </h1>
                      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Computer Engineer</h2>

                      {/* <p className="mt-4 max-w-xs leading-normal">Lorem ipsum dolor sit amet...</p> */}

                      {/* Icons */}
                      <ul className="ml-1 mt-8 flex items-center">
                          <li className="mr-5 shrink-0 text-xs">
                              <a className="block hover:text-slate-200" href="https://github.com/benjisu03" target="_blank" rel="noopener noreferrer" title="GitHub">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" className="w-8 h-8">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                  </svg>
                              </a>
                          </li>
                          <li className="mr-5 shrink-0 text-xs">
                              <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/benjamin-johnson-ia/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                              </a>
                          </li>
                      </ul>
                      <nav className="block">
                          <ul className="mt-16 w-max">
                              <li>
                                  <a href="#about" className="hover:text-slate-200">About</a>
                              </li>
                              <li>
                                  <a href="#projects" className="hover:text-slate-200">Projects</a>
                              </li>
                              <li>
                                  <a href="#ethics" className="hover:text-slate-200">Ethics Essay</a>
                              </li>
                          </ul>
                      </nav>
                  </header>
              </div>
              <div className="flex-1 py-24">
                  <main id="content">
                      <section id="about">
                          <h2 className="pt-6 font-bold tracking-tight text-slate-200 sm:text-xl">About</h2>
                      </section>
                      <section id="projects">
                          <h2 className="pt-6 font-bold tracking-tight text-slate-200 sm:text-xl">Projects</h2>
                            <b>Grayshift Raytracer</b>
                            <p>
                                This project involved building a raytracer in Rust, initially based on the Ray Tracing in One Weekend book series.
                                Over time, I enhanced the project with features such as GPU acceleration, BSDF materials, and mesh loading.
                                Through this project, I improved my Rust programming skills and gained valuable experience in utilizing multithreading to boost computational efficiency.
                                The source code is available on <a href="https://github.com/benjisu03/grayshift">Github</a>.
                            </p>
                      </section>
                      <section id="ethics">
                          <h2 className="pt-6 font-bold tracking-tight text-slate-200 sm:text-xl">Ethics Essay</h2>
                          <p>
                              In engineering, ethical dilemmas often arise from the need to balance two competing objectives.
                              Engineers are responsible for finding solutions that align with both goals without compromising our integrity or ethical principles.
                              Navigating these challenges needs more than just technical knowledge, it requires diligence.
                              Getting absorbed in the fine details of our work can sometimes obscure the broader implications of our decisions.
                              By stepping back and adopting a "bird's-eye view," we can better understand the full scope of the situation, enabling more thoughtful and informed decision-making.
                              The IEEE Code of Ethics serves as a vital framework in this process, providing a set of guiding principles to help engineers ensure their actions uphold moral standards.
                              This code emphasizes the importance of prioritizing public welfare, respecting privacy, and acting with integrity in all circumstances.
                              One ethical case study that underscores these challenges involved the use of user data from an Amazon Echo device to assist in solving a crime.
                              The case revolved around a murder investigation in which the Echo, an Internet of Things (IoT) device, might have captured data that could provide insight into the events taking place that night.
                              However, Amazon refused to release the data without a proper warrant, citing the user's right to privacy.
                              This situation highlights a fundamental ethical tension: the balance between protecting individual privacy and serving the public interest, such as solving crimes or ensuring safety.
                              As IoT devices become more prevalent in daily life, this issue is becoming increasingly common and complex.
                              The virtues most relevant to this issue are responsibility, integrity, and honesty.
                              Companies like Amazon and the engineers who design these systems must carefully weigh their ethical obligations in these scenarios.
                              Responsibility involves making thoughtful, deliberate decisions that consider the potential consequences for everyone involved.
                              Integrity means avoiding actions driven by hidden agendas or self-interest, even when put under external pressure.
                              Finally, honesty is crucial in communicating decisions clearly and transparently.
                              Being honest about these choices compels organizations to evaluate their actions because transparency naturally invites scrutiny.
                              This openness increases accountability and prompts engineers to reflect on the ethical implications of their work.
                              By adhering to these principles, engineers can navigate complex ethical dilemmas.
                          </p>
                      </section>
                  </main>
              </div>
          </div>
      </div>
  );
}