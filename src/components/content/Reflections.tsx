type ReflectionsProps = {
	className?: string
}

const Reflections = ({ className = "" }: ReflectionsProps) => {
	return <div className={`${className}`}><h1>Reflections</h1></div>
}

export default Reflections;