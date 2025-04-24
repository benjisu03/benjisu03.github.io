export enum CardCorner {
	TopLeft = "tl",
	TopRight = "tr",
	BottomLeft = "bl",
	BottomRight = "br"
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
            border border-border rounded-${corner}-2xl
            shadow-xl
        `}>
		</div>
	);
}

export default ProjectCard;