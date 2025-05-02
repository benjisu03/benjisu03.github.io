type SeparatorProps = {
    color? : string;
    className?: string
}

const Separator = ({ color = "border", className = "" }: SeparatorProps) => {
    return <div className={`${className} w-full h-[1px] bg-${color}`}></div>
}

export default Separator;