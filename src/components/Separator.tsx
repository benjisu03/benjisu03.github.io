type SeparatorProps = {
    className?: string
}

const Separator = ({ className = "" }: SeparatorProps) => {
    return <div className={`${className} w-full h-[1px] bg-border`}></div>
}

export default Separator;