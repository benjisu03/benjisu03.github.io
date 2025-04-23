type AboutProps = {
	className?: string
}

const About = ({ className = "" }: AboutProps) => {
	return <div className={`${className}`}><h1>About</h1></div>
}

export default About;