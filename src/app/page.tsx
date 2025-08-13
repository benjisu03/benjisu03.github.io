import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/wave.gif')] bg-cover bg-center [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
	    <div className="flex items-center gap-8 bg-black/25 p-4 rounded-lg shadow-lg backdrop-blur-md">
		    <Image
			    src={"/alone.png"}
			    alt={"long lost doggo"}
			    width={150} height={150}
			    className="rounded-lg object-cover shadow-lg"
		    />
		    <div className="flex flex-col gap-4">
			    <div>
				    <h2 className="font-bold text-3xl">nerdium</h2>
				    <p className="italic">computer engineer, game developer, dead mall enthusiast</p>
			    </div>
			    <dl className="grid grid-cols-[auto_1fr] gap-x-4">
			        <dt className="font-semibold">email</dt>
			        <dd><a className="underline" href="mailto:contact@nerdium.dev">{"contact@nerdium.dev"}</a></dd>

			        <dt className="font-semibold">github</dt>
			        <dd><a className="underline" href="https://github.com/nerdium">{"nerdium"}</a></dd>
			    </dl>
		    </div>
	    </div>
    </div>
  );
}
