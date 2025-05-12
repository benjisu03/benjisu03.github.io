import ResumeSection from "@/components/ResumeSection";

type ResumeProps = {
	className?: string
}

const Resume = ({ className = "" }: ResumeProps) => {
	return <div className = {`${className}`}>
		<iframe
			src="/Resume.pdf"
			width="100%"
			height="1200px"
			style={{ border: "none" }}
		/>
	</div>
}

export default Resume;