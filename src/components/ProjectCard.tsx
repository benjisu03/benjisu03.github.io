export enum CardCorner {
	TopLeft = "rounded-tl-2xl",
	TopRight = "rounded-tr-2xl",
	BottomLeft = "rounded-bl-2xl",
	BottomRight = "rounded-br-2xl"
}

type ProjectCardProps = {
	corner: CardCorner;
	className?: string;
}

const ProjectCard = ({ corner, className = "" }: ProjectCardProps) => {
	return (
		<div className={`
            ${className}
            p-[30px]
            bg-background
            border border-border ${corner}
            shadow-xl
        `}>
		</div>
	);
}

export default ProjectCard;