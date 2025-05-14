import Image from "next/image";

type AboutProps = {
	className?: string
}

const About = ({ className = "" }: AboutProps) => {
	return <div className = "flex gap-[50px]">
		<div className = "flex flex-col gap-[20px]">
			<p>
				<b className = "text-accent font-semibold">Hello!</b> I'm Benjamin Johnson, a senior in Computer Engineering
				at Iowa State University. I'll be graduating in May 2025, and then pursue a career in software engineering.
				Coding has been a long time hobby for me, so I am constantly working on personal projects outside of school.
				With my free time I also love to workout, and particularly enjoy long distance running.
			</p>

			<p className = "mt-[10px]">After I graduate with my Bachelor's, I'm planning on working as a software engineer
			for a few years to get some experience in the industry. Then I hope to come back and get by Master's. Eventually,
			I would like to create a startup and develop my own products. </p>
		</div>

		<Image
			src="/images/portrait.jpg"
			alt = ""
			width = {200} height = {600}
			className = "rounded-sm"
		/>
	</div>
}

export default About;