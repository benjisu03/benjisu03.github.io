
type ReflectionsProps = {
	className?: string
}

const Reflections = ({ className = "" }: ReflectionsProps) => {
	return (
		<div className = { `${className}` }>
			<h1 className = { "text-xl font-semibold mt-[30px] mb-[10px]" }>General Education Reflection</h1>
			<iframe
				src="/reflections/GeneralEducationReflection.pdf"
				width="100%"
				height="600px"
				style={{ border: "none" }}
			/>

			<h1 className = { "text-xl font-semibold mt-[30px] mb-[10px]" }>Cumulative Reflection</h1>
			<iframe
				src="/reflections/CumulativeReflection.pdf"
				width="100%"
				height="600px"
				style={{ border: "none" }}
			/>

			<h1 className = { "text-xl font-semibold mt-[30px] mb-[10px]" }>Ethics Essay</h1>
			<iframe
				src="/reflections/EthicsEssay.pdf"
				width="100%"
				height="600px"
				style={{ border: "none" }}
			/>

		</div>
	);
}

export default Reflections;