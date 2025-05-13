type SeparatorProps = {
    className?: string
}

const Separator = ({className = "" }: SeparatorProps) => {
    return <div className={`w-full h-[1px] bg-border ${className}`}></div>
}

export default Separator;