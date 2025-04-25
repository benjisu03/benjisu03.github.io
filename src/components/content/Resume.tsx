import ResumeSection from "@/components/ResumeSection";

type ResumeProps = {
	className?: string
}

const Resume = ({ className = "" }: ResumeProps) => {
	return <div className={`${className}`}>
		<ResumeSection />
	</div>
}

export default Resume;