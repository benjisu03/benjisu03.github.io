import EthicsEssay from "@/components/essays/EthicsEssay";
import GeneralEducationReflection from "@/components/essays/GeneralEducationReflection";
import CumulativeReflection from "@/components/essays/CumulativeReflection";

type ReflectionsProps = {
	className?: string
}

const Reflections = ({ className = "" }: ReflectionsProps) => {
	return (
		<div className = { `${className}` }>
			<h1 className = { "text-xl font-semibold mt-[30px] mb-[10px]" }>General Education Reflection</h1>
			<p className = { "text-sm text-justify" }> { GeneralEducationReflection } </p>

			<h1 className = { "text-xl font-semibold mt-[30px] mb-[10px]" }>Cumulative Reflection</h1>
			<p className = { "text-sm text-justify" }> { CumulativeReflection } </p>

			<h1 className = { "text-xl font-semibold mt-[30px] mb-[10px]" }>Ethics Essay</h1>
			<p className = { "text-sm text-justify" }> { EthicsEssay } </p>
		</div>
	);
}

export default Reflections;