type ResumeProps = {
	className?: string
}

const Resume = ({ className = "" }: ResumeProps) => {
	return <div className={`${className}`}><h1>Resume</h1></div>
}

export default Resume;